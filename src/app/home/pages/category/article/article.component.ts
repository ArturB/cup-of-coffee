import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Article } from '../../../../core/models/article.model';
import { ArticleService } from '../../../../core/services/article.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

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
        this.likes = this.article.likes.length;
        console.log("Artykuł: ", this.article);
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnChanges() {

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
    // let user = this.user;
    // console.log(art);
    // // this.articleService.adArticle(art);
    // this.articleService.addArticle(art)
    //   .subscribe(data => {
    //     console.log(art);
    //     art = data;
    //   },
    //     // success => 
    //     // { console.log("success "+success) }, 
    //     error => { console.log("errrr "+error);
    //     });



    console.log(this.isLiked);
    this.isLiked = !this.isLiked;
    
  }

  onFavorite() {
    console.log(this.isFavorite);
    this.isFavorite = !this.isFavorite;
    
  }

}
