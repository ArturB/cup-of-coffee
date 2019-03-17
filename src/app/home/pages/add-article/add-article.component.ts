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
  // submit: boolean = false;

  success: string;
  error: string;

  constructor(
    private articleService: ArticleService,
    private authService: AuthService
    ) {

   }

  ngOnInit() {

    this.user = this.authService.getProfile();
    // this.authService.getUserProfile().subscribe((user: User) => {
    //   this.user = user;
    // });
    console.log(this.user);

    this.newArtForm = new FormGroup({
      // articleId: new FormControl(null),
      link: new FormControl(this.colorLink, Validators.required),
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(90)
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
    // this.submit = false;
    this.urlLink = event.target.value;
    // this.urlLink=val;
    console.log(this.urlLink);
  }


  addArticle() {
    console.log(this.newArtForm);
    console.log(this.user);

    let art = new Article(
      // this.user,
      this.newArtForm.value.link,
      this.newArtForm.value.title,
      this.newArtForm.value.category,
      this.newArtForm.value.description,
      [],
      new Date().toDateString(),
    );
    // console.log(art);
    // this.articleService.adArticle(art);
    this.articleService.addArticle(art)
      .subscribe(
        data => {
          console.log(art);
          art = data;
          this.success = 'Artukuł został dodany'
          setTimeout(() => this.success = null, 4000);
          this.onReset();
        },

        err => {
          if (err.status === 422) {
            this.error = 'Artykuł o podanym tytule już istnieje. Wybierz inną nazwę i spróbuj ponownie'
            setTimeout(() => this.error = null, 4000);
          }
          else {
            this.error = 'Podczas wysyłania artykułu wystąpił nieoczekiwany błąd. Spróbuj ponownie'
            console.log("errrr "+ err);
          }

        }
      );
    // this.submit = true;
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
