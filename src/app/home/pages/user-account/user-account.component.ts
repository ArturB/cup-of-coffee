import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class UserAccountComponent implements OnInit, OnDestroy {

  user: User;
  articles: Array<Article> = [];
  favArticles: Array<Article> = [];
  article: Article;
  myArticles: boolean = false;
  myFavorites: boolean = false;

  selCat: string;
  favSelCat: string;

  private artsSub = new BehaviorSubject<any>(this.articles);
  private favArtsSub = new BehaviorSubject<any>(this.favArticles);
  private selCatSub = new BehaviorSubject<any>(this.selCat);
  private favSelCatSub = new BehaviorSubject<any>(this.favSelCat);
  
  
  // catOptions = [
  //   { name: "wszystkie", value: 1 },
  //   { name: "popularne", value: 2 },
  //   { name: "sztuka", value: 2 },
  //   { name: "psychologia", value: 2 }
  // ];

  // selectedCat: string = this.catOptions[0].name;

  // category: string;

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
  
  }

  showUserArticles() {
    if (!this.myArticles) {
      this.myFavorites = false;
      this.articleService.getUserArticlesObs().subscribe(
        (articles: Array<Article>) => {
        // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
          // console.log(articles);
          this.articles = articles;
          this.artsSub.next(this.articles);
          this.myArticles = true;
          this.selCatSub.subscribe(cat => {
            this.selCat = cat;
            console.log('Cat',this.selCat)
          })
        },
        err => { 
          console.log(err, err.status);
          // this.artsSub.unsubscribe();
        }
      );
    }
    else {
      this.myArticles = false;
    }
    // console.log(this.user);
    
  }

  onSelectCat(selectedCat: string) {
    console.log(selectedCat);
    this.artsSub.subscribe(data => {
      // this.articles = data;
      if (selectedCat != 'wszystkie') {
        this.articles = data.filter(e => e.category === selectedCat); // pomijamy drugi element ze strumienia
        // console.log(this.articles)

      }
      else {
        this.articles = data;
      }

      this.selCatSub.next(selectedCat);
      console.log('selectedCat',selectedCat)
      
      console.log('User arts: ', this.articles, data);

    });
  }
  showFavorites() {
    if (!this.myFavorites) {
      this.myArticles = false;
      this.articleService.getFavorites().subscribe(
        (articles: Array<Article>) => {
        // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
          // console.log(articles);
          this.favArticles = articles;
          this.favArtsSub.next(this.favArticles);
          this.myFavorites = true;
          this.favSelCatSub.subscribe(cat => {
            this.favSelCat = cat;
            console.log('Cat',this.favSelCat)
          })
        },
        err => { 
          console.log(err, err.status);
        }
      );
    }
    else {
      this.myFavorites = false;
    }
  }

  onSelectFavCat(selectedCat: string) {
    console.log(selectedCat, this.articles);
    this.favArtsSub.subscribe(data => {
      // this.articles = data;
      if (selectedCat != 'wszystkie') {
        this.favArticles = data.filter(e => e.category === selectedCat); // pomijamy drugi element ze strumienia
        console.log(this.favArticles)

      }
      else {
        this.favArticles = data;
      }

      this.favSelCatSub.next(selectedCat);
      console.log('User arts: ', this.favArticles, data);

    });
  }


  onGotoArticle(article: Article) {
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
          this.articleService.getUserArticlesObs().subscribe(
            (articles: Array<Article>) => {
            // sclice() żeby przy zmianie listy zwracana była nowa referencja z posortkowaną listą
              // console.log(articles);
              this.articles = articles;
              this.artsSub.next(this.articles);
    
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
  
 

  ngOnDestroy() {
    this.artsSub.unsubscribe();
    console.log('unsubscribe',this.artsSub)
  }

}
