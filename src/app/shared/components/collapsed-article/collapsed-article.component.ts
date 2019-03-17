import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-collapsed-article',
  templateUrl: './collapsed-article.component.html',
  styleUrls: ['./collapsed-article.component.css']
})
export class CollapsedArticleComponent implements OnInit {

  @Input() article: Article;
  @Output() onShowArticle = new EventEmitter();
  
  artLink: string;

  likes: number;
  
  constructor() { }


  ngOnInit() {
    console.log('likes ', this.article.likes.length)
    this.likes = this.article.likes.length;
  }

  showArticle(article: Article) {
    // console.log(article.articleId);
    this.onShowArticle.emit(article);
  }


  checkBgr() {
    this.artLink = this.article.link;
    if (this.artLink.includes('#')) {
      return {
        'background-color': this.artLink
      };
    } else {
      return  {
        'background-image': 'url(' + this.article.link + ')'
      };
    }
  }

}
