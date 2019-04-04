import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-collapsed-article',
  templateUrl: './collapsed-article.component.html',
  styleUrls: ['./collapsed-article.component.css']
})
export class CollapsedArticleComponent implements OnInit {

  @Input() article: Article;
  @Output() showArticle = new EventEmitter();
  
  tcolor: string;
  bcolor: string;
  faIcon: string;

  likes: number;
  
  constructor() { }

  ngOnInit() {
    this.likes = this.article.likes.length;
    this.tcolor = this.article.artColors[0];
    this.bcolor = this.article.artColors[1];
    this.faIcon = this.article.artColors[2];
  }

  openArticle(article: Article) {
    this.showArticle.emit(article);
  }

}
