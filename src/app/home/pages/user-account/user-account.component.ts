import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from '../../../core/models/user.model';
import { Article } from '../../../core/models/article.model';
import { ArticleService } from '../../../core/services/article.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user: User;
  articles: Array<Article>;
  article: Article;
  myArticles: boolean = false;

  constructor(private router: Router, private authService: AuthService, private articleService: ArticleService) {
    this.user = this.authService.getProfile();

    // this.authService.getUserProfile().subscribe((user: User) => {
    //   console.log(user);
    //   this.user = user;
    // });
    console.log(this.user);
   }

  ngOnInit() {
    
  }

  showUserArticles() {
    if (!this.myArticles) {
      this.articleService.getUserArticlesObs(this.user).subscribe(
        (articles: Array<Article>) => {
        // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
          // console.log(articles);
          this.articles = articles;
          this.myArticles = true;

        },
        err => { 
          console.log(err, err.status);
        }
      );
    }
    else {
      this.myArticles = false;
    }
    // console.log(this.user);
    
  }

  gotoArticle(article: Article) {
    this.router.navigate(['kategorie/',article.category, 'artykul', article.title]);
    console.log("Wybrany artykuł: ", article);
  }

  removeArticle(art: Article) {
    this.article = art;
    console.log(this.article);
		this.articleService.deleteArticle(this.article)
			.subscribe(
        data => {
          // this.articles = this.articles.slice();
          // let lol =data._id.toString();
          this.articleService.getUserArticlesObs(this.user).subscribe(
            (articles: Array<Article>) => {
            // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
              // console.log(articles);
              this.articles = articles;
    
            },
            err => { 
              console.log(err, err.status);
            }
          );
          // this.articles.splice(Number(data._id), 1);
          
          console.log('Artykuł usunięty', data)
        },
				err => console.log(err)
			);
	}

}
