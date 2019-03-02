import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-btn-see-more',
  templateUrl: './btn-see-more.component.html',
  styleUrls: ['./btn-see-more.component.css']
})
export class BtnSeeMoreComponent implements OnInit {
  @Input() articleCategory: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCategory() {
    console.log(this.articleCategory)
    this.router.navigate(['/kategorie', this.articleCategory])
  }

}
