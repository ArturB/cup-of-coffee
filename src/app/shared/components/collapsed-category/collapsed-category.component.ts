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

  filteredArticles: Article[] = [];
  
  articleTitle: string;

  @Input() articles: Article[];
  @Input() category: string;
  @Input() showFour: boolean;

  @Input() searchText: string;


  constructor(private router: Router, private articleService: ArticleService) {
    
   }

  ngOnInit() {
    if (this.category === 'wszystkie') {
      //retry sprawia, że jeżeli nasze zapytanie się nie powiodło to jeszcze 3 razy będzie wykonana próba zapytania
      // this.articleService.getArticlesObs().retry(3).subscribe((articles: Array<Article>) => {
      this.articleService.getArticlesObs().subscribe(
        (articles: Array<Article>) => {     
          this.articles = articles;        
          this.filteredArticles = this.sliceFour();
        },
        err => { 
          console.log(err, err.status);
        }
      )
    } else {
      this.articleService.getArticleObsByCategory(this.category).subscribe(
        (articles: Array<Article>) => {
          this.articles = articles;
          this.filteredArticles = this.sliceFour();
        },

        err => { 
          console.log(err);
        }
      );
    }
  }

  sliceFour() {
    if (this.showFour) {
      if(this.articles.length > 4) {
        return this.articles = this.articles.slice(this.articles.length-4, this.articles.length);
      } else {
        return this.articles = this.articles;
      }
    } else {
      return this.articles = this.articles;
    }
  }


  onGotoArticle(article: Article) {
    this.router.navigate(['kategorie/',article.category, 'artykul', article._id]);
    console.log("Wybrany artykuł: ", article);
  }


}
