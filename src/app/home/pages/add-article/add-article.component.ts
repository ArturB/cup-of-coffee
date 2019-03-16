import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
// import { map } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators'
import { Article } from '../../../core/models/article.model';
import { User } from '../../../core/models/user.model';
import { ArticleService } from '../../../core/services/article.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit, OnChanges {

  // newArt: Article = {
  //   articleId: 10,
  //   link: "./assets/img/cup.png",
  //   title: "NOWY ARTYKUŁ",
  //   category: "popularne",
  //   author: "Darika",
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem esse eaque libero quod perspiciatis, tempore suscipit qui veritatis autem eum adipisci dolor quidem reiciendis soluta veniam ipsam nisi vero tempora sequi provident ratione explicabo est? Sint ex eveniet doloremque necessitatibus accusantium deleniti corporis vel ullam fugiat magnam! Ab quo sapiente fuga esse perspiciatis nostrum maxime maiores delectus excepturi velit, qui vel eius est perferendis nam enim totam laborum quis temporibus provident debitis rerum, numquam ea dolores! Tenetur iure libero eaque temporibus ut, rem velit necessitatibus optio, voluptatem quaerat in. Nesciunt atque, voluptatum ratione vero error nam voluptate nisi ad itaque architecto doloremque repudiandae officia in unde dolorum aliquid ullam illo, dolor ipsa excepturi accusamus blanditii`,
  //   likes: 12,
  //   dateModified: new Date().toDateString()
  // };
  user: User;
  
  newArtForm: FormGroup;

  urlLink: string = '';
  colorLink: string = '#14563e';

  newArt: Article;

  reset: boolean = false;
  submit: boolean = false;

  constructor(
    private articleService: ArticleService,
    private authService: AuthService
    ) {

   }

  ngOnInit() {

    this.authService.getUserProfile(2).subscribe((user: User) => {
      this.user = user;
    });
    console.log(this.user);

    this.newArtForm = new FormGroup({
      // articleId: new FormControl(null),
      link: new FormControl(this.colorLink, Validators.required),
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(45)
        ]),
      category: new FormControl('popularne', Validators.required),
      // author: new FormControl(null),
      // author: new FormControl(this.user.username, Validators.required),
      description: new FormControl(null, [
        Validators.required,
      ]),

    });

  }
  ngOnChanges() {
    this.onValue(event);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  onValue(event: any) {
    this.submit = false;
    this.urlLink = event.target.value;
    // this.urlLink=val;
    console.log(this.urlLink);
  }

  // addArticle() {
  //   this.articleService.adddArticle().subscribe(
  //     article => {
  //       console.log(article);
  //     }
  //   );
  // }

  addArticle() {
    console.log(this.newArtForm);
    console.log(this.user);
    // this.newArt.articleId = 15;
    // this.newArt.link = this.newArtForm.value.link;
    // this.newArt.title = this.newArtForm.value.title;
    // this.newArt.category = this.newArtForm.value.category;
    // this.newArt.author = this.newArtForm.value.author;
    // this.newArt.description = this.newArtForm.value.description;
    // this.newArt.likes = 0;
    // this.newArt.dateModified = new Date().toDateString();
    // console.log(this.newArt);

    let art = new Article(
      this.user,
      this.newArtForm.value.link,
      this.newArtForm.value.title,
      this.newArtForm.value.category,
      this.newArtForm.value.description,
      0,
      new Date().toDateString(),
    );
    console.log(art);
    // this.articleService.adArticle(art);
    let art2 = {
      // user: this.user,	
      user: this.user,	
      // articleId: {type: Number, required: true},	
      link: "ooo",	
      title: "ooo",
      category: "popularne",
      // author: {type: String, required: true},
      // author: [{type: Schema.Types.ObjectId, ref: 'AcVideo'}],
      description: "ooo",
      likes: 0,
      // likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
      dateModified: new Date().toDateString()
    };
    this.articleService.adArticle(art)
      .subscribe(data => {
        art = data;
      },
        // success => 
        // { console.log("success "+success) }, 
        error => { console.log("errrr "+error);
        });
    this.submit = true;
    this.onReset();
  }

  onReset() {
    this.reset = true;
    console.log(this.reset);

    this.newArtForm.reset({
      link: this.colorLink,
      author: this.user.username,
      category: 'popularne'
    });
  }


}
