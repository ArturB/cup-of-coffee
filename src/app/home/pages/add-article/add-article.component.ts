import { Component, OnInit } from '@angular/core';

import { Article } from '../../../core/models/article.model';
import { ArticleService } from '../../../core/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  newArt: Article = {
    articleId: 10,
    link: "./assets/img/cup.png",
    title: "NOWY ARTYKUŁ",
    category: "popularne",
    author: "Darika",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditii`,
    viewed: 12,
    dateModified: new Date().toDateString()
  };
  constructor(private articleService: ArticleService) {

   }

  ngOnInit() {
  }

  newArticle() {
    this.articleService.addArticle(this.newArt).subscribe(art => {
      console.log(art);
    });
    console.log(this.newArt);
    //this.newArt.reset();
  }

}
