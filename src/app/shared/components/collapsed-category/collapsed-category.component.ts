import { Component, OnInit, Input } from '@angular/core';
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
  filteredArticles: Article[] = [];
  
  articleTitle: string;

  @Input() category: string;
  @Input() showFour: boolean;

  constructor(private router: Router, private articleService: ArticleService) {
    
   }

  ngOnInit() {
    this.articleService.getArticleObsByCategory(this.category).subscribe((articles: Array<Article>) => {
      // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
      this.articles = articles.slice();
    });
    console.log(this.category);
    //this.articles = this.articleService.getArticleByCategory(this.category);
    this.filteredArticles = this.sliceFour();

  }

  sliceFour() {
    if (this.showFour) {
      return this.articles = this.articles.slice(this.articles.length-4, this.articles.length);
    } else {
      return this.articles = this.articles;
    }
  }


  gotoArticle(article: Article) {
    this.router.navigate(['kategorie/',article.category, 'artykul', article.articleId]);
    console.log("Wybrany artykuł: ", article);
  }


}
