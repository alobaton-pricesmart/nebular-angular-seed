import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = new FormControl('', [Validators.required]);
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.emailConfirm = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.passwordConfirm = new FormControl('', [Validators.required]);
    this.form = this.formBuilder.group({
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      emailConfirm: this.emailConfirm,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    });
  }

}
