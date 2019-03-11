import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // category: string;
  // private parametersObservable: any;
  // isCategory: boolean = false;

  toggleBtn: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    // this.parametersObservable = this.route.params.subscribe(params => {
    //   //"product" is obtained from 'ProductResolver'
    //   this.category = this.route.snapshot.data['category'];
    // });
    this.  router.routeReuseStrategy.shouldReuseRoute = () => false;
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
