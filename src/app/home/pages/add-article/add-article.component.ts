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
    articleId: 1,
    link: "./assets/img/image9.jpg",
    title: "hd sefsgvr vsjnjso vfrfs ssvklms chhhhhhhd sefsgvr vsjnjso vfrfs ssvklms",
    author: "Admin",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem `,
    category: "popularne",
    viewed: 12,
    dateModified: new Date()
  };
  constructor(private articleService: ArticleService) {

   }

  ngOnInit() {
  }

  newArticle() {
    this.articleService.addArticle(this.newArt);
    console.log(this.newArt);
    //this.newArt.reset();
  }

}
