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
      userId: 2,
      email: "daria@mail.ru",
      password: "ffff",
      username: "Darika"
    },
    {
      userId: 3,
      email: "new@lol.pw",
      password: "fffrrf",
      username: "New"
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
