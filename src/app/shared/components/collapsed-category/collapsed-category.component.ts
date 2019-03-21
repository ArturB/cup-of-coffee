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

  // articles: Article[] = [];
  filteredArticles: Article[] = [];
  
  articleTitle: string;

  @Input() articles: Article[];
  @Input() category: string;
  @Input() showFour: boolean;

  constructor(private router: Router, private articleService: ArticleService) {
    
   }

  ngOnInit() {
    // this.articleService.getArticleObsByCategory(this.category).subscribe((articles: Array<Article>) => {
    //   // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
    //   this.articles = articles.slice();
    // });
    // console.log(this.category);
    // //this.articles = this.articleService.getArticleByCategory(this.category);
    // this.filteredArticles = this.sliceFour();

    if (this.category === 'wszystkie') {
      //retry sprawia, że jeżeli nasze zapytanie się nie powiodło to jeszcze 3 razy będzie wykonana próba zapytania
      // this.articleService.getArticlesObs().retry(3).subscribe((articles: Array<Article>) => {
      this.articleService.getArticlesObs().subscribe(
        (articles: Array<Article>) => {
          // console.log(articles);
          // this.articles = articles.slice();        
          this.articles = articles;        
          this.filteredArticles = this.sliceFour();
          console.log(this.articles, this.filteredArticles);
        },
        err => { 
          console.log(err, err.status);
        }
      )
    } else {
      this.articleService.getArticleObsByCategory(this.category).subscribe(
        (articles: Array<Article>) => {
        // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
          // console.log(articles);
          // this.articles = articles.slice();
          this.articles = articles;
          this.filteredArticles = this.sliceFour();
          console.log(this.articles, this.filteredArticles);
        },
        // (error: HttpErrorResponse) => {
        //   console.log(error.status);
        // }
        err => { 
          console.log(err, err.status);
        }
      );
    }
    console.log('collapsed articles: ', this.articles);
    //this.articles = this.articleService.getArticleByCategory(this.category);
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


  gotoArticle(article: Article) {
    this.router.navigate(['kategorie/',article.category, 'artykul', article._id]);
    console.log("Wybrany artykuł: ", article);
  }


}
