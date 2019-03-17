import { Injectable } from '@angular/core';
import { User } from "../models/user.model";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: Array<User> = [
    {
      // userId: 1,
      username: "Darika"
,     email: "daria@mail.ru",
      password: "ffff",
    },
    {
      // userId: 2,
      username: "New",
      email: "new@lol.pw",
      password: "fffrrf",
    }
  ];

  private user: User;

  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
  // private userObs = new BehaviorSubject<User>(this.user);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }


  constructor(private http: HttpClient) {
   }

   getProfile() {
     return JSON.parse(localStorage.getItem('user'));
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
    // return (localStorage.getItem('access_token') !== null);
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
