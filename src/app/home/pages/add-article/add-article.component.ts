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
    ) { }

  ngOnInit() {

    this.user = this.authService.getProfile();
    // this.authService.getUserProfile().subscribe((user: User) => {
    //   this.user = user;
    // });
    console.log(this.user);

    this.newArtForm = new FormGroup({
      link: new FormControl(this.colorLink, Validators.required),
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
  ngOnChanges() {
    this.onValue(event);
    
  }

  onValue(event: any) {
    this.urlLink = event.target.value;
    console.log(this.urlLink);
  }


  addArticle() {
    console.log(this.newArtForm);
    console.log(this.user);

    let art = new Article(
      this.newArtForm.value.link,
      this.newArtForm.value.title,
      this.newArtForm.value.category,
      this.newArtForm.value.description,
      [],
      new Date().toDateString(),
      this.newArtForm.value.author,
    );
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

    // przypisanie polom wartości domyslnych
    this.newArtForm.reset({
      link: this.colorLink,
      author: this.user.username,
      category: 'popularne'
    });
  }


}
