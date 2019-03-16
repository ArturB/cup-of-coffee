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

  constructor(private authService: AuthService) {
    this.authService.getUserProfile().subscribe((user: User) => {
      console.log(user);
      this.user = user;
    });
    console.log(this.user);
   }

  ngOnInit() {
    
  }

}
