import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Array<Article> = [
    {
      articleId: 1,
      link: "./assets/img/image1.jpg",
      title: "hd sefsgvr vsjnjso vfrfs ssvklms chhhhhhhd sefsgvr vsjnjso vfrfs ssvklms",
      author: "Admin",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem `,
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 2,
      link: "./assets/img/image2.jpg",
      title: "vmslvnjjnjso vfrfs  vmslvnjjnjso vfrfs  vmslvnjjnjso vfrfs ssvklms",
      author: "Lollypop",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore susci`,
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 3,
      link: "./assets/img/image3.jpg",
      title: "so vfrfs  vmslvnjjnjso vfrfs so vfrfs  vmslvnjjnjso vfrfsvmsgdrgd sffsnnrjvrn so vfrfs ssvklms",
      author: "Agent007",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod pe`,
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 4,
      link: "./assets/img/image4.jpg",
      title: "vmslvnj vmsjns",
      author: "Ford1201",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque lib`,
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 5,
      link: "./assets/img/image5.jpg",
      title: "vmslvnj vmsjn vsjnjso vfrfs ssvklms",
      author: "Admin",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderi`,
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    ];

  constructor() { }

  getArticles() {
    return this.articles
  }
  getArticleById(artId: number) {
    return this.articles.find(e => e.articleId === artId);
  }

}
