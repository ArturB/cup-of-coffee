import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from "../../../../core/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.css']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.logForm = new FormGroup({
      email: new FormControl(null, [
            Validators.required, 
            Validators.email
            ]),
      password: new FormControl(null, [
            Validators.minLength(6),
            Validators.maxLength(24),
            Validators.required
          ])
    });
  }

  loginUser() {
    const user = new User(
        this.logForm.value.userId = 4,
        this.logForm.value.email,
        this.logForm.value.password
    );
    console.log(user);
  }

}
