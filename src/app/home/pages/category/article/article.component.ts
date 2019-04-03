import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
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

  likes: Array<User> = [];

  tcolor: string;
  bcolor: string;
  faIcon: string;

  mes;
  error: string;
  // const initialSubscriber = lastUrl.subscribe(console.log);
  private isLike = new BehaviorSubject<any>(this.mes);
  private isFavorite = new BehaviorSubject<any>(this.mes);
  // private likesArray = new BehaviorSubject<Array<User>>(this.likes);

  isLiked: boolean = false;
  isFavorited: boolean = false;

  artTitle: string;
  artId: string;

  likeStatus: boolean;


  // artLink: string;
  artColor: boolean;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private articleService: ArticleService,
    private authService: AuthService
    ) { 
  }

  ngOnInit() {
    // this.artTitle = this.route.snapshot.params['title'];
    // this.user = this.authService.getProfile();

    this.authService.getUserProfile().subscribe(
      (user: User) => {
        console.log(user);
        this.user = user;
      },
      err => {
        console.log('error', err)
      }
    );

    this.artId = this.route.snapshot.params['_id'];
    // let artrId: string = artId.toExponential();
    console.log('artId', this.artId);
    this.getArt();

    this.isLike.subscribe(data => {
      if (data == 'likeAdded') {
        this.isLiked = true;
        console.log('Jest lajk')
      } else {
        this.isLiked = false;
        console.log('Nie ma lajku')
        
      }
    });

    // this.likesArray.subscribe(data => {
    //   console.log('likesArray', this.likes)

    // })
   
  }

  ngOnChanges() {
    // console.log('likes ', this.likes);

  }

  getArt() {
    console.log('art', this.article);
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
        // this.likesArray.next(this.likes);
        
      },
      err => {
        let artgetNF: string = 'Artykuł nie został znaleziony'
        if (err.status == 410) {
          this.router.navigate(['/404', {artNF: artgetNF}]);
        }
        else if (err.status == 404) {
          this.router.navigate(['/404', {artNF: artgetNF}]);
        }
        else {
          console.log('error',err.status);
          this.router.navigate(['/404', , {artNF: artgetNF}]);
        }
        
      }
    )
  }

  onLike() {
    // this.user = this.authService.getProfile();
    // console.log('user', this.user);

    this.articleService.addLikeByUser(this.article)
      .subscribe(
        data => {
          this.mes = data;
          this.isLike.next(this.mes.message);
          console.log('onLike', this.mes.message);

          // this.getArt();
          this.articleService.getArticleObsById(this.artId).subscribe(
            data => {
              let result;
              result = data;
              this.article = result.article;
              this.tcolor = this.article.artColors[0];
              this.bcolor = this.article.artColors[1];
              this.faIcon = this.article.artColors[2];
      
      
              this.likes = this.article.likes;
              console.log('likes',this.likes )
              // this.isLike.next(result.message);
              // this.likesArray.next(this.likes);
              
            },
            err => {
              console.log('error',err.status);
              this.router.navigate(['/404']);
            }

          )
        },


          //tu zostało zrealizowano update lajków, ale lepiej chyba jednak pobierać z serwera nowy artykuł
          // if(this.mes.message == 'likeAdded') {
          //   this.likes.push(this.user);
          //   this.likesArray.next(this.likes);
          // }
          // else if(this.mes.message == 'likeRemoved') {
          //   // this.likes.pop();
          //   this.likes.splice(this.likes.indexOf(this.user), 1 );
          //   this.likesArray.next(this.likes);
          // }
          // this.likesArray.next(this.likes);

          // this.messag.next(this.mes.message)
          // this.likesArray.next(this.likes);


        // success => 
        // { console.log("success "+success) }, 
        err => { 
          if (err.status === 401) {
            let error = 'Błąd autoryzacji. Zaloguj się ponownie.'
            // setTimeout(() => this.error = null, 4000);
            this.error = 'Żyby postawić lajka musisz być zalogowany'
            setTimeout(() => this.error = null, 4000);
            console.log("errrr "+error);
          }
          else {
            if (err.status == 410) {
              // let next: ActivatedRouteSnapshot;
              // this.router.navigate(
              //   ['/404'], { queryParams: { name: next.outlet['name']} }   
              // );
              let artNF: string = 'Artykuł został usunięty przez autora :(';
              this.router.navigate(['/404', {artNF: artNF}]);
              // console.log()
            }
            else {
              this.error = 'Wystąpił noeioczekiwany błąd podczas wysyłania/ usuwania lajka. Spróbuj zalogować się ponownie'            
              console.log(this.error);
            }
            

            
            
          }
        }
      );
      // this.isLiked = !this.isLiked;
      console.log(this.isLiked);


    
  }


}
