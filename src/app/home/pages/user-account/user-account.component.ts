import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

  private artsSub = new BehaviorSubject<any>(this.articles);
  stopwatchValue$: Observable<any>;
  
  
  catOptions = [
    { name: "wszystkie", value: 1 },
    { name: "popularne", value: 2 },
    { name: "sztuka", value: 2 },
    { name: "psychologia", value: 2 }
  ];

  selectedCat: string = this.catOptions[0].name;

  category: string;

  confRemove: boolean = false;

  constructor(private router: Router, private authService: AuthService, private articleService: ArticleService) {
    this.user = this.authService.getProfile();

    // this.authService.getUserProfile().subscribe((user: User) => {
    //   console.log(user);
    //   this.user = user;
    // });
    console.log(this.user);
   }

  ngOnInit() {
    
    
  //   let beers = [
  //     {name: "Stella", country: "Belgium", price: 9.50},
  //     {name: "Sam Adams", country: "USA", price: 8.50},
  //     {name: "Bud Light", country: "USA", price: 6.50},
  //     {name: "Brooklyn Lager", country: "USA", price: 8.00},
  //     {name: "Sapporo", country: "Japan", price: 7.50}
  // ];
   
  // Rx.Observable.from(beers)   // <1>
  //   .filter(beer => beer.price < 8)   // <2>
  //   .map(beer => beer.name + ": $" + beer.price) // <3>
  //   .subscribe(    // <4>
  //       beer => console.log(beer),
  //       err => console.error(err),
  //       () => console.log("Streaming is over")
  // );
  }

  showUserArticles() {
    if (!this.myArticles) {
      this.articleService.getUserArticlesObs(this.user).subscribe(
        (articles: Array<Article>) => {
        // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
          // console.log(articles);
          this.articles = articles;
          this.artsSub.next(this.articles);
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

  selectCat() {
    console.log(this.selectedCat);
    this.artsSub.subscribe(data => {
      // this.articles = data;
      if (this.selectedCat != 'wszystkie') {
        this.articles = data.filter(e => e.category === this.selectedCat); // pomijamy drugi element ze strumienia

      }
      else {
        this.articles = data;
      }
      
      console.log('User arts: ', this.articles, data);

    });
  }

  gotoArticle(article: Article) {
    this.router.navigate(['kategorie/',article.category, 'artykul', article._id]);
    console.log("Wybrany artykuł: ", article);
  }

  onEdit(art: Article) {
    console.log('art._id',art._id);

    this.router.navigate(['edytuj-artykul', art._id]);

  }

  onRemoveAnsw(answ: boolean) {
    this.confRemove = false;
    console.log('ddd',this.article)
    if(answ) {
      this.removeArticle(this.article);
    } 
  }

  remArticle(art: Article) {
    this.confRemove = true;
    this.article = art;

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
