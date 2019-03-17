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

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  private tokenAvailable(): boolean {
    return !!localStorage.getItem('access_token');
  }

  private usersObs = new BehaviorSubject<Array<User>>(this.users);
  private userObs = new BehaviorSubject<User>(this.user);

  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  // private userObs = new BehaviorSubject<User>(this.user);

  constructor(private http: HttpClient) { 
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User {
  //       return this.currentUserSubject.value;
  //   }


  // login(user: User) {
  //   // const body = JSON.stringify(user);
  //   // console.log(user);
  //   // const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  //   return this.http.post('http://localhost:4000/user/login', user)
  //     .pipe(map((user => {
  //       this.user = user;
  //     })));
  //     .pipe(map(user => {
  //       // login successful if there's a jwt token in the response
  //       if (user) {
  //           // store user details and jwt token in local storage to keep user logged in between page refreshes
  //           localStorage.setItem('currentUser', JSON.stringify(user));
  //           // this.currentUserSubject.next(user);
  //       }

  //       return user;
  //   }));
  // }

  // data: Object = {success: String, message: String, token: String};

  login(user: User): Observable<boolean> {
    return this.http.post<{token: string}>('http://localhost:4000/user/login', user)
      .pipe(
        map(result => {
          // this.data = result;
          // console.log(result.message);
          localStorage.setItem('access_token', result.token);
          this.loggedIn.next(true);
          return true;
        })
      );
  }
//   login(user: User) {
//     return this.http.post<{access_token:  string}>('http://localhost:4000/user/login', user).pipe(tap(res => {
//     localStorage.setItem('access_token', res.access_token);
// }))
// }

  signup(user: User) {
    // const body = JSON.stringify(user);
    // console.log(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.post('http://localhost:4000/user/signup', user, {headers: headers});

  }

  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
    this.loggedIn.next(false);
    localStorage.clear();
    // return (localStorage.getItem('access_token') !== null);
  }

  // public get loggedIn(): boolean {
  //   return (localStorage.getItem('access_token') !== null);
  // }
  // loggedIn(): boolean {
  //   return (localStorage.getItem('access_token') !== null);
  // }



  getUserProfile() {
    // this.user = this.users.find(e => e.userId === userId);
    // this.userObs.next(this.user);
    // return this.userObs.asObservable();
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    console.log('acoount', token)

		return this.http.get('http://localhost:4000/profile' + token)
    // console.log('acoount')
  }

}
