import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-collapsed-article',
  templateUrl: './collapsed-article.component.html',
  styleUrls: ['./collapsed-article.component.css']
})
export class CollapsedArticleComponent implements OnInit {

  @Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

}
