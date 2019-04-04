import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';

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
  

  confRemove: boolean = false;

  constructor(private router: Router, private authService: AuthService, private articleService: ArticleService) {
    // this.user = this.authService.getProfile();

    this.authService.getUserProfile().subscribe(
      (user: User) => {
        this.user = user;
      },
      err => {
        console.log("error", err)
        if (err.status == 401) {
          console.log("error", err)
          this.authService.logout();    
          this.router.navigate(
            
            ['/konto/logowanie'],
            // w queryParams przesyłam dwa dodatkowe parametry:
            // returnUrl żeby po zaogowaniu użytkownik wrócił do strony z której został przekirowany do logowania
            // name daje info z jakiego komponentu user został przekierowany do logowania żeby wyświetlić odpowiedni komunikat
            { queryParams: { returnUrl: 'moje-konto', name: 'authError' } }   
          );                  
          

        }
      }
    );
   }

  ngOnInit() {
  
  }

  showUserArticles() {
    if (!this.myArticles) {
      this.myFavorites = false;
      this.articleService.getUserArticlesObs().subscribe(
        (articles: Array<Article>) => {
          this.articles = articles;
          this.artsSub.next(this.articles);
          this.myArticles = true;
          this.selCatSub.subscribe(cat => {
            this.selCat = cat;
          })
        },
        err => { 
          console.log(err);
          if (err.status == 401) {
            console.log(err)
            this.authService.logout();    
            this.router.navigate(              
              ['/konto/logowanie'],
              { queryParams: { returnUrl: 'moje-konto', name: 'authError' } }   
            ); 
          }
        }
      );
    }
    else {
      this.myArticles = false;
    }
    
  }

  onSelectCat(selectedCat: string) {
    this.artsSub.subscribe(data => {
      if (selectedCat != 'wszystkie') {
        this.articles = data.filter(e => e.category === selectedCat);
      }
      else {
        this.articles = data;
      }

      this.selCatSub.next(selectedCat);

    });
  }
  showFavorites() {
    if (!this.myFavorites) {
      this.myArticles = false;
      this.articleService.getFavorites().subscribe(
        (articles: Array<Article>) => {
          this.favArticles = articles;
          this.favArtsSub.next(this.favArticles);
          this.myFavorites = true;
          this.favSelCatSub.subscribe(cat => {
            this.favSelCat = cat;
          })
        },
        err => { 
          console.log(err);
          if (err.status == 401) {
            console.log(err)
            this.authService.logout();    
            this.router.navigate(              
              ['/konto/logowanie'],
              { queryParams: { returnUrl: 'moje-konto', name: 'authError' } }   
            ); 
          }
        }
      );
    }
    else {
      this.myFavorites = false;
    }
  }

  onSelectFavCat(selectedCat: string) {
    this.favArtsSub.subscribe(data => {
      if (selectedCat != 'wszystkie') {
        this.favArticles = data.filter(e => e.category === selectedCat);
      }
      else {
        this.favArticles = data;
      }

      this.favSelCatSub.next(selectedCat);

    });
  }


  onGotoArticle(article: Article) {
    this.router.navigate(['kategorie/',article.category, 'artykul', article._id]);
    console.log("Wybrany artykuł: ", article);
  }

  onEdit(art: Article) {
    this.router.navigate(['edytuj-artykul', art._id]);

  }

  onRemoveAnsw(answ: boolean) {
    this.confRemove = false;
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
		this.articleService.deleteArticle(this.article)
			.subscribe(
        data => {
          this.articleService.getUserArticlesObs().subscribe(
            (articles: Array<Article>) => {
              this.articles = articles;
              this.artsSub.next(this.articles);
    
            },
            err => { 
              console.log(err);
            }
          );
          
          console.log('Artykuł usunięty', data)
        },
				err => console.log(err)
			);
  }

  ngOnDestroy() {
    this.artsSub.unsubscribe();
  }

}
