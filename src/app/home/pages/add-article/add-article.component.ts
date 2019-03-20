import { Component, OnInit } from '@angular/core';
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
export class AddArticleComponent implements OnInit {

  user: User;
  
  newArtForm: FormGroup;

  // urlLink: string = '';
  tcolor: string = '#fcfcfc';
  bcolor: string = '#14563e';

  titleName: string;

  iconsArray: Array<string> = [
    'fa-heart',
    'fa-home',
    'fa-music',
    'fa-heart-o',
    'fa-birthday-cake',
    'fa-automobile',
    'fa-bicycle',
    'fa-camera',
    'fa-camera-retro',
    'fa-comments-o',
    'fa-heartbeat',
    'fa-cogs',
    'fa-paw',
    'fa-diamond',
    'fa-cutlery',
    'fa-handshake-o',
    'fa-hourglass-half',
    'fa-gift',
    'fa-gamepad',
    'fa-flash',
    'fa-adjust',
    'fa-child',
    'fa-bomb',
    'fa-money',
    'fa-trophy',
    'fa-anchor',
    'fa-plane',
    'fa-rocket',
    'fa-briefcase',
    'fa-asterisk',
    'fa-balance-scale',
    'fa-ban',
    'fa-bathtub',
    'fa-cart-plus',
    'fa-bed',
    'fa-bullseye',
    'fa-bell-o',
  ];
  icon: string = this.iconsArray[0];

  newArt: Article;

  reset: boolean = false;

  success: string;
  error: string;

  constructor(
    private articleService: ArticleService,
    private authService: AuthService
    ) { }

  ngOnInit() {

    this.user = this.authService.getProfile();
    // this.authService.getUserProfile().subscribe((user: User) => {
    //   this.user = user;
    // });
    console.log(this.user);

    this.newArtForm = new FormGroup({
      // link: new FormControl(this.colorLink, Validators.required),
      colorText: new FormControl(this.tcolor, Validators.required),
      colorBgr: new FormControl(this.bcolor, Validators.required),
      faIcon: new FormControl(this.iconsArray[0], Validators.required),
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(90)
        ]),
      category: new FormControl('popularne', Validators.required),
      // author: new FormControl(null),
      author: new FormControl(this.user.username, Validators.required),
      description: new FormControl(null, [
        Validators.required,
      ]),

    });

  }

  updateName() {
    this.titleName = this.newArtForm.get('title').value;
    console.log(this.titleName)
  }

  chooseIc() {
    
    this.icon = this.newArtForm.value.faIcon;

    // return this.icon
    
  }

  onValue(event: any) {
    // this.urlLink = event.target.value;
    // console.log(this.urlLink);
  }


  addArticle() {
    console.log(this.newArtForm);
    console.log(this.user);

    let art = new Article(
      [this.tcolor, this.bcolor, this.newArtForm.value.faIcon],
      this.newArtForm.value.title,
      this.newArtForm.value.category,
      this.newArtForm.value.description,
      [],
      new Date().toDateString(),
      this.newArtForm.value.author,
    );
    console.log(art);
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
          if (err.status === 401) {
            this.error = 'Podczas wysyłania artykułu wystąpił błąd. Spróbuj zalogować się ponownie'
            setTimeout(() => this.error = null, 4000);
          }
          else {
            this.error = 'Podczas wysyłania artykułu wystąpił nieoczekiwany błąd. Spróbuj ponownie'
            console.log("errrr "+ err);
          }

        }
      );
  }

  onReset() {
    this.reset = true;
    console.log(this.reset);
    this.tcolor = '#fcfcfc';
    this.bcolor = '#14563e';
    this.icon = this.iconsArray[0];

    // przypisanie polom wartości domyslnych
    this.newArtForm.reset({
      colorText: this.tcolor,
      colorBgr: this.bcolor,
      faIcon: this.iconsArray[0],
      author: this.user.username,
      category: 'popularne'
    });
  }


}
