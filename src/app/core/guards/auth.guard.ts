// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { AuthService } from '../services/auth.service';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private authenticationService: AuthService
//     ) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const currentUser = this.authenticationService.currentUserValue;
//         if (currentUser) {
//             // logged in so return true
//             return true;
//         }

//         // not logged in so redirect to login page with the return url
//         this.router.navigate([ '/konto/', 'logowanie' ], { queryParams: { returnUrl: state.url } });
//         return false;
//     }
// }
// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// @Injectable({
//     providedIn: 'root'
//   })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) { }

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (localStorage.getItem('access_token')) {
//       return true;
//     }

//     // this.router.navigate(['login']);
//     this.router.navigate(['/konto/logowanie'], { queryParams: { returnUrl: state.url } });
//     return false;
//   }
// }

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          // jeśli user nie jest zalogowany to jest przekierowywany do strony logowania
          if (!isLoggedIn) {
            this.router.navigate(
              ['/konto/logowanie'],
              // w queryParams przesyłam dwa dodatkowe parametry:
              // returnUrl żeby po zaogowaniu użytkownik wrócił do strony z której został przekirowany do logowania
              // name daje info z jakiego komponentu user został przekierowany do logowania żeby wyświetlić odpowiedni komunikat
              { queryParams: { returnUrl: state.url, name: next.component['name'] } }
            );
            return false;
          }
          return true;
        })
      );
  }
}
