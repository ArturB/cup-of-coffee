import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { Article } from '../../../../core/models/article.model';
import { ArticleService } from '../../../../core/services/article.service';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  user: User;

  // private artObs : Observable<Article> ; 
  // private artsObs = new BehaviorSubject<Article>(this.article);

  likes: number;

  isLiked: boolean = false;
  isFavorite: boolean = false;

  artLink: string;
  artColor: boolean;

  constructor(
    private route: ActivatedRoute, 
    private articleService: ArticleService,
    private authService: AuthService
    ) { 

  }

  ngOnInit() {
    let artTitle: string = this.route.snapshot.params['title'];
    // let artrId: string = artId.toExponential();
    this.articleService.getArticleObsById(artTitle).subscribe(
      (article: Article) => {
        this.article = article;
        // this.artsObs.next(this.article);
        this.likes = this.article.likes.length;
        // return this.artsObs.asObservable();
        // console.log("Artykuł: ", this.article);
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnChanges() {
    console.log('likes ', this.likes);
    // this.onLike();

  }

  checkBgr() {
    this.artLink = this.article.link;
    if (this.artLink.includes('#')) {
      console.log("color: ", this.artLink, this.artColor);
      return {
        'background-color': this.artLink
      };
    } else {
      // this.artLink = this.article.link;
      console.log("link: ", this.artLink, this.artColor);
      this.artColor = false;
      return  {
        'background-image': 'url(' + this.article.link + ')'
      };
    }
  }

  onLike() {
    this.user = this.authService.getProfile();
    // let newLike: User;
    // console.log(this.article.likes.length);
    // this.articleService.adArticle(art);
    this.articleService.addLikeByUser(this.article)
      .subscribe(
        data => {
          console.log(this.article);
          this.article = data;

        },
        // success => 
        // { console.log("success "+success) }, 
        err => { 
          if (err.status === 401) {
            let error = 'Błąd autoryzacji. Zaloguj się ponownie.'
            // setTimeout(() => this.error = null, 4000);
            console.log("errrr "+error);
          }
          else {
            let error = 'Jakiś inny błąd'
            console.log("errrr "+ err);
          }
        }
      );



    console.log(this.isLiked);
    this.isLiked = !this.isLiked;
    
  }

  onFavorite() {
    console.log(this.isFavorite);
    this.isFavorite = !this.isFavorite;
    
  }

}
