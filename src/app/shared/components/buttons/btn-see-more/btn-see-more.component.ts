import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-btn-see-more',
  template: '<button type="button" class="btn btnPink" (click)="goToCategory()">Zobacz więcej<i class="fa fa-angle-double-right ml-2 my-auto"></i></button>',
})
export class BtnSeeMoreComponent implements OnInit {
  @Input() articleCategory: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCategory() {
    this.router.navigate(['/kategorie', this.articleCategory])
  }

}
