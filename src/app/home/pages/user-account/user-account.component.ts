import { Component, OnInit } from '@angular/core';

import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserProfile(1).subscribe((user: User) => {
      this.user = user;
    });
    console.log(this.user);
  }

}
