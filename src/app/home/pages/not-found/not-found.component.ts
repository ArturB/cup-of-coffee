import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  // templateUrl: './not-found.component.html',
  template: `
    <p *ngIf="error" class="text-center mt-4 mb-4 alert alert-danger">{{error}}</p>
    <div class="container">
      <img src="assets/img/404-error1.png" class="mx-auto d-block img-fluid" alt="404 Not found">
    </div>
    `,
  // styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  error: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['artNF']) {
        // this.doSearch(params['term'])
        this.error = params['artNF'];
      }
      else if (params['artgetNF']) {
        // this.doSearch(params['term'])
        this.error = params['artgetNF'];
      }
    });
    // this.route.params.subscribe( params => this.doSearch(params['term']));
   }

  ngOnInit() {
  }

}
