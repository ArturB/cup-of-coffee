import { Injectable } from '@angular/core';
import { User } from "../models/user.model";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: Array<User> = [
    {
      userId: 1,
      username: "Darika"
,     email: "daria@mail.ru",
      password: "ffff",
    },
    {
      userId: 2,
      username: "New",
      email: "new@lol.pw",
      password: "fffrrf",
    }
  ];

  private user: User;

  private usersObs = new BehaviorSubject<Array<User>>(this.users);
  private userObs = new BehaviorSubject<User>(this.user);

  constructor(private http: HttpClient) { }


  getUserProfile(userId: number): Observable<User> {
    this.user = this.users.find(e => e.userId === userId);
    this.userObs.next(this.user);
    return this.userObs.asObservable();
  }

}
