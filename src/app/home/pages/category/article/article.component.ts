import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Article } from '../../../../core/models/article.model';
import { ArticleService } from '../../../../core/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  isFavorite: boolean = false;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { 

    let artId: number = parseInt(this.route.snapshot.params['articleId']);
    this.articleService.getArticleObsById(artId).subscribe((article: Article) => {
      this.article = article;
    })

    //this.article = articleService.getArticleObsById(artId);
    console.log("Artykuł: ", this.article);

  }

  ngOnInit() {
  }

  getBgrUrl() {
    console.log(this.article.link);
    let artLink = this.article.link;
    // return 'url(`${this.article.link}`)';
    return  'url(' + this.article.link + ')';
    // return "url(./assets/img/image2.jpg)";
  }

  onFavorite() {
    console.log(this.isFavorite);
    this.isFavorite = !this.isFavorite;
    
  }

}
