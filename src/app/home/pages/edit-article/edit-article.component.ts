import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Article } from '../../../core/models/article.model';
import { User } from '../../../core/models/user.model';
import { ArticleService } from '../../../core/services/article.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

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

    // this.authService.getUserProfile(2).subscribe((user: User) => {
    //   this.user = user;
    // });
    console.log(this.user);

    this.newArtForm = new FormGroup({
      // articleId: new FormControl(null),
      link: new FormControl(this.colorLink, Validators.required),
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
        ]),
      category: new FormControl('popularne', Validators.required),
      // author: new FormControl(null),
      author: new FormControl(this.user.username, Validators.required),
      description: new FormControl(null)

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

  editArticle() {
    console.log(this.newArtForm);
    // this.newArt.articleId = 15;
    // this.newArt.link = this.newArtForm.value.link;
    // this.newArt.title = this.newArtForm.value.title;
    // this.newArt.category = this.newArtForm.value.category;
    // this.newArt.author = this.newArtForm.value.author;
    // this.newArt.description = this.newArtForm.value.description;
    // this.newArt.likes = 0;
    // this.newArt.dateModified = new Date().toDateString();
    // console.log(this.newArt);

    const art = new Article(
      // this.user,
      this.newArtForm.value.link,
      this.newArtForm.value.title,
      this.newArtForm.value.category,
      this.newArtForm.value.description,
      0,
      new Date().toDateString()
    );
    console.log(art);
    this.articleService.addArticle(art).subscribe(art => {
      console.log(art);
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


