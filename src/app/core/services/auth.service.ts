import { Injectable } from '@angular/core';
import { User } from "../models/user.model";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private user: User;

  // zmienna potrzebna do weryfikacji czy user jest zalogoany. Używana m.in w auth.guard
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
  // private userObs = new BehaviorSubject<User>(this.user);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }


  constructor(private http: HttpClient) {
   }

  private tokenAvailable(): boolean {
    return !!localStorage.getItem('access_token');
  }

  login(user: User): Observable<boolean> {
    return this.http.post<{token: string, userr: User}>('http://localhost:4000/user/login', user)
      .pipe(
        map(result => {
          // this.data = result;
          // console.log(result.message);
          localStorage.setItem('access_token', result.token);
          // dodanie usera do local storage żeby póżniej można było bez wysyłania żądania do serwera wyświetlić info o nim na jego koncie
          localStorage.setItem('user', JSON.stringify(result.userr));
          this.loggedIn.next(true);
          return true;
        })
      );
  }

  signup(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.post('http://localhost:4000/user/signup', user, {headers: headers});
  }

  logout() {
    // remove user from local storage to log user out
    this.loggedIn.next(false);
    // localStorage.clear();
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    // return (localStorage.getItem('access_token') !== null);
  }

  getProfile() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // getUserProfile() {
  //   const token = localStorage.getItem('access_token')
  //     ? '?token=' + localStorage.getItem('access_token')
  //     : '';
  //   // console.log('acoount', token)
  //   console.log('acoount', this.user)

	// 	return this.http.get('http://localhost:4000/profile' + token)
  // }

}
