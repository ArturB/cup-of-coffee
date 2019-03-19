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

  likes: Array<User> = [];

  tcolor: string;
  bcolor: string;
  faIcon: string;

  mes;
  error: string;
  // const initialSubscriber = lastUrl.subscribe(console.log);
  private isLike = new BehaviorSubject<any>(this.mes);
  // private likesArray = new BehaviorSubject<Array<User>>(this.likes);

  isLiked: boolean = false;
  isFavorite: boolean = false;

  artTitle: string;

  likeStatus: boolean;


  // artLink: string;
  artColor: boolean;

  constructor(
    private route: ActivatedRoute, 
    private articleService: ArticleService,
    private authService: AuthService
    ) { 
  }

  ngOnInit() {
    this.artTitle = this.route.snapshot.params['title'];
    // let artrId: string = artId.toExponential();
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
    this.articleService.getArticleObsById(this.artTitle).subscribe(
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
      error => {
        console.log(error);
      }
    )
  }


  checkBgr() {
    // this.artLink = this.article.link;

    // if (this.artLink.includes('#')) {
    //   console.log("color: ", this.artLink, this.artColor);
    //   return {
    //     'background-color': this.artLink
    //   };
    // } else {
    //   // this.artLink = this.article.link;
    //   console.log("link: ", this.artLink, this.artColor);
    //   this.artColor = false;
    //   return  {
    //     'background-image': 'url(' + this.article.link + ')'
    //   };
    // }
  }

  onLike() {
    this.user = this.authService.getProfile();
    console.log('user', this.user);

    this.articleService.addLikeByUser(this.article)
      .subscribe(
        data => {
          this.mes = data;
          this.isLike.next(this.mes.message);
          this.getArt();


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

          console.log('onLike', this.mes.message);
          // this.messag.next(this.mes.message)
          // this.likesArray.next(this.likes);


        },
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
            let error = 'Jakiś inny błąd'
            console.log("errrr "+ err);
            
          }
        }
      );
      // this.isLiked = !this.isLiked;
      console.log(this.isLiked);


    
  }

  onFavorite() {
    console.log(this.isFavorite);
    this.isFavorite = !this.isFavorite;
    
  }

}
