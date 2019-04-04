import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // zmienna potrzebna do weryfikacji czy user jest zalogoany. Używana m.in w auth.guard
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  constructor(private http: HttpClient) {
   }

  private tokenAvailable(): boolean {
    return !!localStorage.getItem('access_token');
  }

  login(user: User): Observable<boolean> {
    return this.http.post<{token: string, userr: User}>('https://cupofcoffee.herokuapp.com/user/login', user)
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          // dodanie usera do local storage żeby póżniej można było bez wysyłania żądania do serwera wyświetlić info o nim na jego koncie
          // localStorage.setItem('user', JSON.stringify(result.userr));
          this.loggedIn.next(true);
          return true;
        })
      );
  }

  signup(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.post('https://cupofcoffee.herokuapp.com/user/signup', user, {headers: headers});
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('access_token');
  }

  getUserProfile() {
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    return this.http.get('https://cupofcoffee.herokuapp.com/profile' + token);
  }

}
