import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  isFavorite: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onFavorite() {
    console.log(this.isFavorite);
    this.isFavorite = !this.isFavorite;
    
  }

}
