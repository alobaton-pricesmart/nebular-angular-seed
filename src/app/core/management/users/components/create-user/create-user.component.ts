import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../../../services/users/users.service';
import { RolesService } from '../../../../services/roles/roles.service';
import { ToastService } from '../../../../../shared/services/toast/toast.service';
import { User } from 'src/app/core/models/user';
import { FormComponent } from 'src/app/shared/components/form/form.component';
import { EnvironmentUtil } from 'src/app/shared/util/environment.util';
import { forkJoin, Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/core/guards/can-deactive.guard';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRole } from 'src/app/core/models/user-role';

@Component({
  selector: 'app-create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.scss']
})
export class CreateUserComponent extends FormComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  nickname: string;
  isEdit: boolean;
  user: User;
  form: FormGroup;
  isForm: Promise<any>;
  roles: any[];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService,
    private readonly toast: ToastService,
    private readonly alertService: AlertService,
    private readonly translate: TranslateService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.nickname = params.id;
      this.isEdit = this.nickname !== null && this.nickname !== undefined;
      this.getRoles();
      if (this.isEdit) {
        this.usersService.getUser(this.nickname).subscribe((user: User) => {
          this.user = user;
          this.initForm(this.user);
        });
      } else {
        this.initForm();
      }
    });
  }

  ngOnDestroy() {

  }

  private initForm(user?: User) {
    this.isForm = Promise.resolve(
      this.form = this.formBuilder.group({
        name: new FormControl(user?.name, [Validators.required]),
        lastName: new FormControl(user?.lastName, [Validators.required]),
        email: new FormControl(user?.email, [Validators.required, Validators.email]),
        emailConfirm: new FormControl(user?.email, [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
        passwordConfirm: new FormControl('', [Validators.required]),
        roles: new FormControl(user ? this.transformUserRoleList(user.authUserRoleList) : null, [Validators.required]),
        phone: new FormControl(user?.phone, [Validators.required])
      })
    );
  }

  getRoles() {
    this.roles = [];
    this.rolesService.getRoles().subscribe((roles: any) => {
      this.roles = roles.map((role: any) => {
        return { value: role.id, title: role.description.es };
      });
    }, (err: any) => {
      if (err.status === 0) {
        this.toast.error('general.errors.serverMomentarilyOutOfService', 'general.errors.title');
      } else {
        const message = err.error?.message || err.message;
        this.toast.error(message, 'general.errors.title');
      }
    });
  }



  onSubmit() {
    if (this.form.invalid) {
      this.validateForm(this.form);
      return;
    }

    if (!this.isEdit) {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    const form: any = this.form.value;

    const nickname = this.getNickname(this.form.controls.email);
    const user = {
      nickname: nickname,
      name: form.name,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      authUserRoleList: this.transformRoles(form.roles, nickname),
      phone: form.phone
    } as User;

    this.usersService.createUser(user).subscribe((_) => {
      this.toast.success('general.messages.successfulCreate', 'general.messages.title');
      this.initForm();

      this.translate.get('management.users.user').subscribe((title) => {
        this.translate.get('general.messages.onSuccessfulCreate', { title: title }).subscribe((response) => {
          this.alertService.confirm(response, 'info').then((response: any) => {
            if (!response) {
              this.router.navigate(['core/management/users']);
            }
          });
        });
      });
    }, (err: any) => {
      if (err.status === 0) {
        this.toast.error('general.errors.serverMomentarilyOutOfService', 'general.errors.title');
      } else {
        const message = err.error?.message || err.message;
        this.toast.error(message, 'general.errors.title');
      }
    });
  }

  update() {
    const form: any = this.form.value;

    const nickname = this.user.nickname;
    const user = {
      ...this.user,
      nickname: nickname,
      name: form.name,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      authUserRoleList: this.transformRoles(form.roles, nickname),
      phone: form.phone
    } as User;

    this.usersService.updateUser(this.user.nickname, user).subscribe((_) => {
      this.toast.success('general.messages.successfulUpdate', 'general.messages.title');
      this.initForm();
      this.router.navigate(['core/management/users']);
    }, (err: any) => {
      if (err.status === 0) {
        this.toast.error('general.errors.serverMomentarilyOutOfService', 'general.errors.title');
      } else {
        const message = err.error?.message || err.message;
        this.toast.error(message, 'general.errors.title');
      }
    });
  }

  private transformRoles(roles: any, nickname: string) {
    return roles.map(role => {
      return {
        authUserRolePk: { nickname, roleId: role },
        authRole: { id: role }
      };
    });
  }

  transformUserRoleList(authUserRoleList: UserRole[]) {
    return authUserRoleList.map(userRole => {
      return userRole.authRole.id;
    });
  }

  getNickname(email: any) {
    const endIndex = email?.value?.indexOf('@');
    return email?.value?.substring(0, endIndex).replace(/\./g, '');
  }

  getConfigValue(configKey: string) {
    return EnvironmentUtil.getConfigValue(configKey);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isPristine(this.form)) {
      return this.alertService.confirm(this.translate.instant('general.messages.onDeactive'), 'info');
    }

    return true;
  }

}
