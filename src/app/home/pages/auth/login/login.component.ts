import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from '../../../../core/models/user.model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.css']
})
export class LoginComponent implements OnInit {

  @Output() emitTitle = new EventEmitter<boolean>();

  logForm: FormGroup;

  returnUrl: string;

  error: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    // pobieranie returnUrl z queryParams żeby po zalogowaniu wrócić na stronę z której user został przekierowany
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.logForm = new FormGroup({
      email: new FormControl('a@a', [
            Validators.required,
            Validators.email
            ]),
      password: new FormControl('aaaaaa', [
            Validators.minLength(6),
            Validators.maxLength(24),
            Validators.required
          ])
    });

  }

  loginUser() {
    const user = new User(
      this.logForm.value.email,
      this.logForm.value.password
      );
      this.authService.login(user)
          .pipe(first())
          .subscribe(
            data => {
              this.router.navigateByUrl(this.returnUrl);
              this.logForm.reset();
            },
            err => {
              if (err.status === 401) {
                this.error = 'Nieprawidłowy login lub hasło';
                setTimeout(() => this.error = null, 4000);
              } else {
                  this.error = 'Wystąpił nieoczekiwany błąd. Spróbuj zalogować się ponownie';
                  setTimeout(() => this.error = null, 4000);
              }
            }
          );

  }

  // zmiana tytułu nad formularzem
  changeTitle(title: boolean) {
    this.emitTitle.emit(title);
    // return this.authTitle
  }
}
