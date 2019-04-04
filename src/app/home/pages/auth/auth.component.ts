import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authTitle: string;
  info: string;

  constructor(private router: Router, private route: ActivatedRoute) { 
  
  }

  ngOnInit() {

    // sprawdzanie czy user jest już zalogowany
    if (localStorage.getItem('access_token') != null) {
      this.router.navigate(['kategorie/']);

    }
    else {
      this.showTitle();
      // odczyt i reagowanie na dodatkowe parametry w URL gdy user został przekierowany z innej strony
      let paramName = this.route.snapshot.queryParams['name'];
      if(paramName == 'AddArticleComponent') {
        this.info = 'Tylko zalogowani użytkownicy mogą dodawać i edytować artykuły';
      } else if (paramName == 'authError') {
        this.info = 'Wystąpił błąd autoryzacji. Zaloguj się ponownie'
      } else if (paramName != 'AddArticleComponent' && paramName != null) {
        this.info = 'Żeby dostać dostęp do tej strony musisz być zalogowany'
      } else {
        this.info = null;
      } 
    }
    
  }


  // wyświetlanie tytułu nad formularzem
  showTitle() {
    if(this.router.url === '/konto/rejestracja') {
      this.authTitle = "rejestracja";
    }
    else {
      this.authTitle = "logowanie";

    }
  }

  onEmitTitle(title: boolean) {
    title ? this.authTitle = 'logowanie' : this.authTitle = 'rejestracja';
  }


}
