import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { RolesService } from '../../../services/roles/roles.service';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { User } from 'src/app/core/users/models/users.interfaces';
import { FormComponent } from 'src/app/shared/util/form.component';
import { EnvironmentUtil } from 'src/app/shared/util/environment.util';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/core/guards/can-deactive.guard';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.scss']
})
export class CreateUserComponent extends FormComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  form: FormGroup;
  isForm: Promise<any>;

  roles: any[];
  settings = {
    singleSelection: false,
    idField: 'value',
    textField: 'title',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true,
    noDataAvailablePlaceholderText: 'No se encontraron roles'
  };

  commonSelectedItem: any;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private rolesService: RolesService,
    private toast: ToastService,
    private alertService: AlertService,
    private translate: TranslateService) {
    super();
  }

  ngOnInit() {
    this.initForm();
    this.getRoles();
  }

  ngOnDestroy() {

  }

  private initForm() {
    this.isForm = Promise.resolve(
      this.form = this.formBuilder.group({
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        emailConfirm: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
        passwordConfirm: new FormControl('', [Validators.required]),
        roles: new FormControl('', [Validators.required]),
      })
    );
  }

  getRoles() {
    this.roles = [];
    this.rolesService.getRoles().subscribe((roles: any) => {
      this.roles = roles.map((role: any) => {
        return { value: role.code, title: role.name.es };
      });
    }, (err: any) => {
      this.toast.error('general.errors.serverMomentarilyOutOfService', 'general.errors.title');
    });
  }

  create() {
    const form: any = this.form.value;

    const roles = [];
    const user = {
      id: form.id,
      nickname: form.id,
      name: form.name,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      roles: roles,
    } as User;

    this.usersService.createUser(user).subscribe((u: any) => {
      this.toast.info('users.create.messages.success', 'general.messages.title');
    }, (err: any) => {
      this.toast.error('general.errors.serverMomentarilyOutOfService', 'general.errors.title');
    });
  }

  private getConfigValue(configKey: string) {
    return EnvironmentUtil.getConfigValue(configKey);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isPristine(this.form)) {
      return this.alertService.confirm(this.translate.instant('general.messages.onDeactive'), 'info');
    }

    return true;
  }

}
