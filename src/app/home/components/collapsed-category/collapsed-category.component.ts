import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Article } from '../../../core/models/article.model';
import { ArticleService } from '../../../core/services/article.service';

@Component({
  selector: 'app-collapsed-category',
  templateUrl: './collapsed-category.component.html',
  styleUrls: ['./collapsed-category.component.css']
})
export class CollapsedCategoryComponent implements OnInit {

  articles: Article[] = [];
  
  categoryName: string = 'Popularne';

  constructor(private router: Router, private articleService: ArticleService) { 
    this.articles = articleService.getArticles();
  }


  ngOnInit() {
  }

  gotoArticle(article: Article) {
    this.router.navigate(['kategorie/',article.category, 'artykul', article.articleId]);
    console.log("dd ", article);
  }


}
