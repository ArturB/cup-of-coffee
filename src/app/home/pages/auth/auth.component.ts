import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, DoCheck {

  authTitle: string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  ngDoCheck()  {
    this.showTitle();
    
  }

  showTitle() {
    if (this.router.url === '/konto/logowanie') {
      this.authTitle = "logowanie";
    } 
    else if(this.router.url === '/konto/rejestracja') {
      this.authTitle = "rejestracja";
    }
  }


}
