import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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

  likes: Array<User> = [];

  tcolor: string;
  bcolor: string;
  faIcon: string;

  mes;
  error: string;

  private isLike = new BehaviorSubject<any>(this.mes);

  isLiked: boolean = false;
  isFavorited: boolean = false;

  artTitle: string;
  artId: string;

  likeStatus: boolean;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private articleService: ArticleService,
    private authService: AuthService
    ) { 
  }

  ngOnInit() {
    this.authService.getUserProfile().subscribe(
      (user: User) => {
        this.user = user;
      },
      err => {
        console.log(err)
      }
    );

    this.artId = this.route.snapshot.params['_id'];
    this.getArt();

    this.isLike.subscribe(data => {
      if (data == 'likeAdded') {
        this.isLiked = true;
      } else {
        this.isLiked = false;
        
      }
    });
   
  }

  getArt() {
    this.articleService.getArticleObsById(this.artId).subscribe(
      data => {
        let result;
        result = data;
        this.article = result.article;
        this.tcolor = this.article.artColors[0];
        this.bcolor = this.article.artColors[1];
        this.faIcon = this.article.artColors[2];


        this.likes = this.article.likes;
        this.isLike.next(result.message);
        
      },
      err => {
        let artgetNF: string = 'Artykuł nie został znaleziony'
        if (err.status == 410) {
          console.log(err);
          this.router.navigate(['/404', {artNF: artgetNF}]);
        }
        else if (err.status == 404) {
          console.log(err);
          this.router.navigate(['/404', {artNF: artgetNF}]);
        }
        else {
          console.log(err);
          this.router.navigate(['/404', , {artNF: artgetNF}]);
        }
        
      }
    )
  }

  onLike() {
    this.articleService.addLikeByUser(this.article)
      .subscribe(
        data => {
          this.mes = data;
          this.isLike.next(this.mes.message);

          this.articleService.getArticleObsById(this.artId).subscribe(
            data => {
              let result;
              result = data;
              this.article = result.article;
              this.tcolor = this.article.artColors[0];
              this.bcolor = this.article.artColors[1];
              this.faIcon = this.article.artColors[2];
      
      
              this.likes = this.article.likes;
              
            },
            err => {
              console.log(err);
              this.router.navigate(['/404']);
            }

          )
        },
        err => { 
          if (err.status === 401) {
            console.log(err);
            this.error = 'Żyby postawić lajka musisz być zalogowany'
            setTimeout(() => this.error = null, 4000);
          }
          else {
            if (err.status == 410) {
              console.log(err);
              let artNF: string = 'Artykuł został usunięty przez autora :(';
              this.router.navigate(['/404', {artNF: artNF}]);
            }
            else {
              console.log(err);
              this.error = 'Wystąpił noeioczekiwany błąd podczas stawiania/ usuwania lajka. Spróbuj później'            
              console.log(this.error);
            }
        
          }
        }
      );
    
  }


}
