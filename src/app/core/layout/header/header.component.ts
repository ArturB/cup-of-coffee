import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  // category: string;
  // private parametersObservable: any;
  // isCategory: boolean = false;


  toggleBtn: boolean = false;

  isLoggedIn$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    
    console.log(this.isLoggedIn$);

    // this.parametersObservable = this.route.params.subscribe(params => {
    //   //"product" is obtained from 'ProductResolver'
    //   this.category = this.route.snapshot.data['category'];
    // });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // console.log('ffff ',this.route.snapshot.params['category']);
    // console.log('this.category ',this.category);
  }
  // ngAfterViewChecked() {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   console.log(this.router.url);
  //   if (this.router.url === '/kategorie/sztuka') {
  //     this.isCategory =true;
  //   }
  //   else {
  //     this.isCategory = false;
  //   }
  // }

  // ngOnDestroy() {
  //   if(this.parametersObservable != null) {
  //     this.parametersObservable.unsubscribe();
  //   }
  // }

  ngOnChanges() {
    // if (this.loggedIn) {
    //   return true
    // }
    // this.loggedIn = this.authService.loggedIn();
    // console.log(this.loggedIn);
    
  }

  onLogout(){
    this.authService.logout();                      // {3}
    this.router.navigate(['/']);
  }

  toggle() {
    this.toggleBtn = !this.toggleBtn;
    console.log(this.toggleBtn);
    // if (this.toggleBtn) {
    //   th
    // }
  }
  toggleIcon() {
    if (this.toggleBtn) {
      return "fa fa-times"
    }
    else return "fa fa-bars"
  }


}
