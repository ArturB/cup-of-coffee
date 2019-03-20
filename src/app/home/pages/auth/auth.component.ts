import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, DoCheck {

  authTitle: string;
  info: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let paramName = this.route.snapshot.queryParams['name'];
    if(paramName == 'AddArticleComponent') {
      this.info = 'Tylko zalogowani użytkownicy mogą dodawać i edytować artykuły';
    } else if (paramName != 'AddArticleComponent' && paramName != null) {
      this.info = 'Żeby dostać dostęp do tej strony musisz być zalogowany'
    } else {
      this.info = null;
    }
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
