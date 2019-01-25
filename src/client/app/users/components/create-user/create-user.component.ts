import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../../business/services/users/users.service';
import { RolesService } from '../../../business/services/roles/roles.service';

@Component({
  moduleId: module.id,
  selector: 'app-create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.css']
})
export class CreateUserComponent implements OnInit {

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

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private rolesService: RolesService) { }

  ngOnInit() {
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

    this.getRoles();
  }

  getRoles() {
    this.roles = [];
    this.rolesService.getRoles().subscribe((roles: any) => {
      this.roles = roles;
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

    this.usersService.createUser(user).subscribe(user => {

    });
  }

}
