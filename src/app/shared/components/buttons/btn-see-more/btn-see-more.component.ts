import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-see-more',
  templateUrl: './btn-see-more.component.html'
})
export class BtnSeeMoreComponent implements OnInit {
  @Input() articleCategory: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCategory() {
    this.router.navigate(['/kategorie', this.articleCategory]);
  }

}
