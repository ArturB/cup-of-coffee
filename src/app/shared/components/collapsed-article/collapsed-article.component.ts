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
  
  // artLink: string;

  // iconsArray: Array<string> = [
  //   'fa-heart',
  //   'fa-heart-o',
  //   'fa-heartbeat',
  //   'fa-home',
  //   'fa-handshake-o',
  //   'fa-gift',
  //   'fa-gamepad',
  //   'fa-flash',
  // ];

  
  tcolor: string;
  bcolor: string;
  faIcon: string;

  likes: number;
  
  constructor() { }


  ngOnInit() {
    // console.log('likes ', this.article.likes.length)
    this.likes = this.article.likes.length;
    this.tcolor = this.article.artColors[0];
    this.bcolor = this.article.artColors[1];
    this.faIcon = this.article.artColors[2];
    // console.log( this.tcolor,  this.bcolor)
  }



  openArticle(article: Article) {
    // console.log(article.articleId);
    this.showArticle.emit(article);
  }

  // randIcon() {
  //   return this.iconsArray[Math.floor(Math.random()*this.iconsArray.length)];
  // }


}
