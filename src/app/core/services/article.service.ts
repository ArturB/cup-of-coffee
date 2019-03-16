import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
// import { filter } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Array<Article> = [
    {
      user: {
        // userId: 4,
        email: "daria@mail.ru",
        password: "ffff",
        username: "Some user"
      },
      // link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvndPBhegt-DXIpCiN-IH7d-MkQlgJruwESgAKCWaQxymSGfC",
      link: "#460327",
      title: "hd sefsgvr vsjnjso vfrfs ssvklms chhhhhhhd sefsgvr vsjnjso vfrfs ssvklms",
      category: "popularne",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem `,
      likes: 12,
      dateModified: new Date().toDateString(),
      articleId: 1
    },
    {
      user: {
        // userId: 5,
        email: "da2a@mail.ru",
        password: "ffff",
        username: "Some user2"
      },
      // link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvndPBhegt-DXIpCiN-IH7d-MkQlgJruwESgAKCWaQxymSGfC",
      link: "#560327",
      title: "hd sefsgvr vsjnjso vfrfs ssvklms chhhhhhhd sefsgvr vsjnjso vfrfs ssvklms",
      category: "sztuka",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem `,
      likes: 12,
      dateModified: new Date().toDateString(),
      articleId: 2
    }
  ];
//   private articles: Array<Article> = [
//     {
//       articleId: 1,
//       // link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvndPBhegt-DXIpCiN-IH7d-MkQlgJruwESgAKCWaQxymSGfC",
//       link: "#460327",
//       title: "hd sefsgvr vsjnjso vfrfs ssvklms chhhhhhhd sefsgvr vsjnjso vfrfs ssvklms",
//       category: "popularne",
//       author: "Admin",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem `,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     {
//       articleId: 2,
//       link: "./assets/img/image2.jpg",
//       title: "vmslvnjjnjso vfrfs  vmslvnjjnjso vfrfs  vmslvnjjnjso vfrfs ssvklms",
//       category: "sztuka",
//       author: "Lollypop",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore susci`,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     {
//       articleId: 3,
//       link: "./assets/img/image3.jpg",
//       title: "so vfrfs  vmslvnjjnjso vfrfs so vfrfs  vmslvnjjnjso vfrfsvmsgdrgd sffsnnrjvrn so vfrfs ssvklms",
//       category: "sztuka",
//       author: "Agent007",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod pe`,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     {
//       articleId: 4,
//       link: "https://www.timeoutdubai.com/sites/default/files/tod/styles/full_img/public/images/2016/12/06/2016_img1_base.jpg?itok=sHcAJcDB",
//       title: "vmslvnj vmsjns",
//       category: "popularne",
//       author: "Ford1201",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque lib`,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     {
//       articleId: 5,
//       link: "./assets/img/image5.jpg",
//       title: "vmslvnj vmsjn vsjnjso vfrfs ssvklms",
//       category: "sztuka",
//       author: "Admin",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderi`,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     {
//       articleId: 6,
//       link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SIrRtTVCOoI-vo7xNckpwkENPfeG4yrhVExPsYLG2GdDNMkR",
//       title: "so vfrfs  vmslvnjjnjso vfrfs so vfrfs  vmslvnjjnjso vfrfsvmsgdrgd sf Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente  fsnnrjvrn so vfrfs ssvklms",
//       category: "popularne",
//       author: "Agent007",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod pe`,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     {
//       articleId: 7,
//       link: "./assets/img/image7.jpg",
//       title: "vmslvnj vmsjns",
//       category: "popularne",
//       author: "Ford1201",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque lib`,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     {
//       articleId: 8,
//       link: "./assets/img/image8.jpg",
//       title: "vmslvnj vmsjn vsjnjso vfrfs ssvklms",
//       category: "sztuka",
//       author: "Admin",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderi`,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     {
//       articleId: 9,
//       link: "./assets/img/image9.jpg",
//       title: "aaa vmsjn vsjnjso vfrfs ssvklms",
//       category: "popularne",
//       author: "Admin",
//       description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem em ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditiis voluptates odio? Eveniet in, ipsam enim quia facere rerum expedita provident nostrum animi tempora facilis exercitationem repellendus sint excepturi blanditiis sunt est veritatis dicta reprehenderit voluptatum aperiam minus vel quidem nulla! Voluptatum, debitis obcaecati cumque explicabo dignissimos provident earum eligendi quis expedita ea! Totam ad necessitatibus enim officiis quas. Rem quam recusandae debitis soluta nostrum. Modi, itaque quas consectetur vero maiores deleniti nostrum cum quaerat repellendus dolore nisi earum optio dolores quia sunt numquam porro distinctio mollitia. Officia, est! Repellendus inventore voluptatem soluta exercitationem.
// Lorem ipsum dolor sit amet consectetur aipsum dolor sit amet consectetur adipisicing elit. Reprehenderi`,
//       likes: 12,
//       dateModified: new Date().toDateString()
//     },
//     ];

  private article: Article;
  private articlesObs = new BehaviorSubject<Array<Article>>(this.articles);
  private articleObs = new BehaviorSubject<Article>(this.article);


  // private artsObs = new BehaviorSubject<Array<Article>>([]);
  // arts$ = this.artsObs.asObservable();

  // private headers = new HttpHeaders().set('Authorization', 'token');

  // constructor(private http: HttpClient) {
  //   this.getArts();
  //  }

  //  getArts() {
  //    return this.http.get<Array<Article>>('http://localhost:3000/articles', {headers: this.headers}).subscribe(
  //      arts => {
  //        this.artsObs.next(arts);
  //      },
  //      err => {
  //        console.log(err);
  //      }
  //    );
  //  }



  constructor(private http: HttpClient) {
    // this.articlesObs.next(this.articles);
   }

  // getArticles() {
  //   return this.articles
  // }

  // getArticleByCategory(artCategory: string) {
  //   return this.articles.filter(e => e.category === artCategory);
  // }

  // getArticleById(artId: number) {
  //   return this.articles.find(e => e.articleId === artId);
  // }

  getHttpArticlesObs(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>('http://localhost:4000/articles/');

  }

  getArticlesObs(): Observable<Array<Article>> {
    this.articlesObs.next(this.articles);
    return this.articlesObs.asObservable();
    // return this.http.get<Array<Article>>('http://localhost:3000/articles');
    // return this.http.get<Array<Article>>('http://localhost:4000/article/');
  }

  //odpowiedź w tym przypadku już nie jest jsonem w postaci listy artykułów. Teraz otrzymukujemy obiekt HttpResponse, które posiada body w którym są nasze artykuły. Mamy też headers, status, url itd
  // gettArticlesObs(): Observable<HttpResponse<Response>> {
  //   this.articlesObs.next(this.articles);
  //   // return this.articlesObs.asObservable();
  //   // return this.http.get<Array<Article>>('http://localhost:3000/articles');
  //   return this.http.get<Response>('http://localhost:3000/articles',
  //     {observe: 'response'})
  // }

  getArticleObsByCategory(artCategory: string): Observable<Array<Article>> {
    //this.articles.filter(e => e.category === artCategory);
    this.articlesObs.next(this.articles.filter(e => e.category === artCategory));
    // console.log(this.articlesObs);
    return this.articlesObs.asObservable();
    // return this.articlesObs.pipe(filter(e => e[0].category === artCategory).asObservable());
    // return this.http.get<Array<Article>>('http://localhost:3000/articles/' + artCategory);
    
  }

  getArticleObsById(artId: number): Observable<Article> {
    this.article = this.articles.find(e => e.articleId === artId);
    this.articleObs.next(this.article);
    return this.articleObs.asObservable();
    // return this.http.get<Article>('http://localhost:3000/articles/' + this.article.category + artId);
  }

  // getArticlesByUser(userId: number): Observable<Array<Article>> {
  //   // musimy dodać '' do userId bo parametr musi być stringiem
  //   const parm = new HttpParams().set('userId', userId+'');
  //   return this.http.get<Array<Article>>('http://localhost:3000/articles', {params: parm});  // --> np. http://localhost:3000/articles?userId=1
  // }

  addArticle(art: Article): Observable<Article> {
    this.articles.push(art);
    this.articlesObs.next(this.articles);
    return this.articleObs.asObservable();
    // return this.http.post<Article>('http://localhost:3000/articles/add', art);
    // return this.http.post<Article>('http://localhost:3000/articles/add', art).subscribe(res => console.log('Done'));;
  }

  // adArticle(art: Article): Observable<Article> {
    // this.articles.push(art);
    // this.articlesObs.next(this.articles);
    // return this.articleObs.asObservable();
    // return this.http.post<Article>('http://localhost:3000/article/add', art);
  adArticle(art: Article):Observable<Article> {
    // const formData = new FormData();
    // formData.append('user', art.user.toString());
    // formData.append('link', art.link);
    // formData.append('title', art.title);
    // formData.append('category', art.category);
    // formData.append('description', art.description);
    // formData.append('likes', art.likes.toString());
    // formData.append('dateModified', art.dateModified);
    // formData.append('link', art.link);
    // formData.append('link', art.link);
    // console.log(art);
    const config = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    
    const body = JSON.stringify(art)
    // const body = new HttpParams()
    //   .set('user', art.user.toString())
    //   .set('link', art.link)                       
    //   .set('title', art.title)                       
    //   .set('category', art.category)                       
    //   .set('description', art.description)                       
    //   .set('likes', art.likes.toString())                       
    //   .set('dateModified', art.dateModified);                      
    // this.http.post<Article>('http://localhost:4000/articles/add', art).subscribe(res => console.log('Done'));;
    // return this.http.post('http://localhost:4000/articles/add', art, { headers: config });
    // return this.http.post<Article>('http://localhost:4000/articles/add', art, { headers: config }).map(res=>res.json());
    
    
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    console.log('acoount', token)

    
    return this.http.post<Article>('http://localhost:4000/articles/add' + token, art, { headers: config });
  }
  // adddArticle(): Observable<Article> {
  //   return this.http.post<Article>('http://localhost:4000/article/add', 
  //     this.articles[1]
      
  //   );
    // return this.http.post<Article>('http://localhost:4000/article/add', {
    //   user: {
    //     userId: 5,
    //     email: "dcs@df.ee",
    //     password: "ddddddd",
    //     username: "Daria",
    //   },	
    //   //   // articleId: {type: Number, required: true},	
    //   link: "ooo",	
    //   title: "ooo",
    //   category: "popularne",
    //   // author: {type: String, required: true},
    //   // author: [{type: Schema.Types.ObjectId, ref: 'AcVideo'}],
    //   description: "ooo",
    //   likes: 0,
    //   // likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    //   dateModified: new Date().toDateString()
    // }
    // );
  //}

  editArticle(art: Article): Observable<Article> {
    // this.articles.push(art);
    // this.articlesObs.next(this.articles);
    // return this.articleObs.asObservable();
    return this.http.put<Article>('http://localhost:3000/articles/' + art.articleId, art);
  }

  deleteArticle(artId: number): Observable<Article> {
    // this.articles.push(art);
    // this.articlesObs.next(this.articles);
    // return this.articleObs.asObservable();
    return this.http.delete<Article>('http://localhost:3000/articles/' + artId);
  }

}
