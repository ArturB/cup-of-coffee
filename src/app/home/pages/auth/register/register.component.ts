import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from "@angular/router";

import { matchOtherValidator } from './password-validation';

import { User } from "../../../../core/models/user.model";
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  logForm: FormGroup;
  error: string;
  showSucessMessage: boolean;

  constructor(private router: Router, private authService: AuthService) { }

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

  // createUser() {
  //   const user = new User(
  //       this.logForm.value.email,
  //       this.logForm.value.password,
  //       this.logForm.value.username
  //   );
  //   console.log(user);
  // }

  createUser() {
    const user = new User(
      this.logForm.value.email,
      this.logForm.value.password,
      this.logForm.value.username
    );
    this.authService.signup(user)
        //we should subscribe to it, wich will now send a request and allows me to lesten to the data i get back
        // .subscribe(
        //     data => {
        //         console.log(data);
        //         this.logForm.reset();
                
                
        //     },
        //     error => console.error(error)
        // );


        // .pipe(first())
        //   .subscribe(
        //     data => {
        //       // this.error = data.success;
        //       this.router.navigate(['konto/logowanie'])
        //     },
        //     err => this.error = 'Nieprawidłowy login lub hasło'
        //   );


          .subscribe(
            res => {
              this.showSucessMessage = true;
              console.log(this.showSucessMessage);
              setTimeout(() => this.showSucessMessage = false, 4000);
              this.logForm.reset();
            },
            err => {
              if (err.status === 422) {
                // this.serverErrorMessages = err.error.join('<br/>');
                console.log('err 422')
              }
              else
                // this.serverErrorMessages = 'Something went wrong.Please contact admin.';
                console.log('err 500??')

            }
          );

  }

}
