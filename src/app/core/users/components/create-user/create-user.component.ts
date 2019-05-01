import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../../../business/services/users/users.service';
import { RolesService } from '../../../../business/services/roles/roles.service';
import { ToastService } from '../../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.scss']
})
export class CreateUserComponent implements OnInit, OnDestroy {

  form: FormGroup;
  id: FormControl;
  name: FormControl;
  lastName: FormControl;
  email: FormControl;
  emailConfirm: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
  role: FormControl;

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

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private rolesService: RolesService,
    private toast: ToastService) {
    this.id = new FormControl('', [Validators.required]);
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.emailConfirm = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.passwordConfirm = new FormControl('', [Validators.required]);
    this.role = new FormControl('', [Validators.required]);
    this.form = this.formBuilder.group({
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      emailConfirm: this.emailConfirm,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      role: this.role,
    });
  }

  ngOnInit() {
    this.getRoles();
  }

  ngOnDestroy() {

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
    const roles = '';
    const user = {
      id: this.id.value,
      nickname: this.id.value,
      name: this.name.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      role: roles,
    };

    this.usersService.createUser(user).subscribe((u: any) => {
      this.toast.info('users.create.messages.success', 'general.messages.title');
    }, (err: any) => {
      this.toast.error('general.errors.serverMomentarilyOutOfService', 'general.errors.title');
    });
  }

}
