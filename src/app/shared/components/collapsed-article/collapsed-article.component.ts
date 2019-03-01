import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-collapsed-article',
  templateUrl: './collapsed-article.component.html',
  styleUrls: ['./collapsed-article.component.css']
})
export class CollapsedArticleComponent implements OnInit {

  @Input() article: Article;
  constructor() { }

  @Output() onShowArticle = new EventEmitter();

  ngOnInit() {
  }

  showArticle(article: Article) {
    console.log(article.articleId);
    this.onShowArticle.emit(article);
  }

}
