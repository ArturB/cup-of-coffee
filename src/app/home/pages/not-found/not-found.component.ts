import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  // templateUrl: './not-found.component.html',
  template: `
    <div class="container">
      <img src="assets/img/404-error1.png" class="mx-auto d-block img-fluid" alt="404 Not found">
    </div>
  `,
  // styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
