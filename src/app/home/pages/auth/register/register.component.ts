import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { matchOtherValidator } from './password-validation';

import { User } from "../../../../core/models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  logForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.logForm = new FormGroup({
      username: new FormControl(null, [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10),
            Validators.pattern("[A-Za-z'-]{2,24}")
            ]),
      email: new FormControl(null, [
            Validators.required, 
            Validators.email
            ]),
      password: new FormControl(null, [
            Validators.minLength(6),
            Validators.maxLength(24),
            Validators.required
          ]),
      ConfirmPassword: new FormControl(null, [
            Validators.required, 
            Validators.minLength(6),
            Validators.maxLength(24),
            matchOtherValidator('password')
            ])
    });
  }

  createUser() {
    const user = new User(
        this.logForm.value.email,
        this.logForm.value.password,
        this.logForm.value.username
    );
    console.log(user);
  }

}
