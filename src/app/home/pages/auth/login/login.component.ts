import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { first } from 'rxjs/operators';

import { User } from "../../../../core/models/user.model";
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.css']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup;
  mesError: string;
  loading = false;
  // submitted = false;
  returnUrl: string;
  public error: string;
  // error = '';

  // info: string;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private authService: AuthService) {
    // const token = localStorage.getItem('token');
    //   if (token !== null) {
    //     // this.router.navigate(['/']);
    //   }
      
   }

  ngOnInit() {
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // this.route.params.subscribe(params => {
    //   if(params['name']) {
    //     this.info = 'Zaloguj się aby móc dodawać artykuły na stronie ' + params['name'];
    //   } else {
    //     this.info = null;
    //   }
    // })

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
      // this.logForm.value.userId = 4,
      this.logForm.value.email, 
      this.logForm.value.password
      );
      this.authService.login(user)
          .pipe(first())
          .subscribe(
            data => {
              // this.error = data.success;
              this.router.navigate([this.returnUrl])
            },
            err => {
              this.error = 'Nieprawidłowy login lub hasło'
              setTimeout(() => this.error = null, 4000);
            }
          );

  }


  
}
