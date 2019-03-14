import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Article } from '../../../core/models/article.model';
import { ArticleService } from '../../../core/services/article.service';

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
  //   viewed: 12,
  //   dateModified: new Date().toDateString()
  // };
  
  newArtForm: FormGroup;

  urlLink: string = '';

  newArt: Article;

  reset: boolean = false;

  constructor(private articleService: ArticleService) {

   }

  ngOnInit() {
    this.newArtForm = new FormGroup({
      // articleId: new FormControl(null),
      link: new FormControl('color', Validators.required),
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
        ]),
      category: new FormControl('popularne', Validators.required),
      // author: new FormControl(null),
      author: new FormControl('Author', Validators.required),
      description: new FormControl(null)

    });

  }
  ngOnChanges() {
    this.onValue(event);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  onValue(event: any) {
    this.urlLink = event.target.value;
    // this.urlLink=val;
    console.log(this.urlLink);
  }

  addArticle() {
    console.log(this.newArtForm);
    // this.newArt.articleId = 15;
    // this.newArt.link = this.newArtForm.value.link;
    // this.newArt.title = this.newArtForm.value.title;
    // this.newArt.category = this.newArtForm.value.category;
    // this.newArt.author = this.newArtForm.value.author;
    // this.newArt.description = this.newArtForm.value.description;
    // this.newArt.viewed = 0;
    // this.newArt.dateModified = new Date().toDateString();
    // console.log(this.newArt);

    const art = new Article(
      null,
      this.newArtForm.value.link,
      this.newArtForm.value.title,
      this.newArtForm.value.category,
      this.newArtForm.value.author,
      this.newArtForm.value.description,
      0,
      new Date().toDateString()
    );
    console.log(art);
    this.articleService.addArticle(art).subscribe(art => {
      console.log(art);
    });
    this.onReset();
  }

  onReset() {
    this.reset = true;
    console.log(this.reset);

    this.newArtForm.reset({
      link: 'color',
      author: 'Author',
      category: 'popularne'
    });
  }

  newArticle() {
    // this.articleService.addArticle(this.newArt).subscribe(art => {
    //   console.log(art);
    // });
    // console.log(this.newArt);
    //this.newArt.reset();
  }

}
