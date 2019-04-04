import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Article } from '../../../core/models/article.model';
import { User } from '../../../core/models/user.model';
import { ArticleService } from '../../../core/services/article.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit, OnDestroy {

  user: User;

  newArtForm: FormGroup;

  catOptions = [
    { name: 'Nauka', value: 'nauka'},
    { name: 'Sztuka', value: 'sztuka'},
    { name: 'Filozofia', value: 'filozofia'},
    { name: 'Psychologia', value: 'psychologia'}
  ];

  iconsArray: Array<string> = [
    'fa-heart',
    'fa-home',
    'fa-music',
    'fa-angellist',
    'fa-heart-o',
    'fa-birthday-cake',
    'fa-automobile',
    'fa-bicycle',
    'fa-camera',
    'fa-camera-retro',
    'fa-comments-o',
    'fa-line-chart',
    'fa-money',
    'fa-heartbeat',
    'fa-paw',
    'fa-diamond',
    'fa-cutlery',
    'fa-credit-card',
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
  
  article: Article = {
    artColors: ['#fcfcfc', '#14563e', this.iconsArray[0]],
    title: '',
    category: this.catOptions[0].value,
    description: '',
    likes: [],
    dateModified: '',
    author: '',
    _id: ''
  };
  tcolor: string = '';
  bcolor: string = '';

  private art = new BehaviorSubject<Article>(this.article);

  newArt: Article;

  reset: boolean = false;

  success: string;
  error: string;

  onEdit: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private articleService: ArticleService,
    private authService: AuthService
    ) {
      this.article._id = this.route.snapshot.params['_id'];

      this.authService.getUserProfile().subscribe(
        (user: User) => {
          this.user = user;
        },
        err => {
          console.log("error", err)
          if (err.status == 401) {
            console.log(err)
            this.authService.logout();    
            this.router.navigate(
              ['/konto/logowanie'],
              // w queryParams przesyłam dwa dodatkowe parametry:
              // returnUrl żeby po zaogowaniu użytkownik wrócił do strony z której został przekirowany do logowania
              // name daje info z jakiego komponentu user został przekierowany do logowania żeby wyświetlić odpowiedni komunikat
              { queryParams: { returnUrl: 'dodaj-artykul', name: 'authError' } }   
            );                  
            
  
          }
        }
      );
            
     }

  ngOnInit() {
    // sprawdzanie czy znjudzujemy się na stronie dodawania czy edycji linków 
    if(this.router.url != '/dodaj-artykul') {
      this.onEdit = true;
      
     this.articleService.getArticleObsById(this.article._id).subscribe(
        data => {
          let result;
          result = data;
          // this.article = result.article;
          this.art.next(result.article);
          
        },
        err => {
          let artgetNF: string = 'Artykuł nie został znaleziony'
          if (err.status == 410) {
            this.router.navigate(['/404', {artNF: artgetNF}]);
          }
          else if (err.status == 404) {
            this.router.navigate(['/404', {artNF: artgetNF}]);
          }
          else {
            console.log('error',err.status);
            this.router.navigate(['/404', , {artNF: artgetNF}]);
          }
          
        }
      )
    } 

    

    this.art.subscribe(data => {
      this.article = data;    

      this.tcolor = this.article.artColors[0];
      this.bcolor = this.article.artColors[1];

      this.newArtForm = new FormGroup({
        colorText: new FormControl(this.tcolor, Validators.required),
        colorBgr: new FormControl(this.bcolor, Validators.required),
        faIcon: new FormControl(this.article.artColors[2], Validators.required),
        title: new FormControl(this.article.title, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(120)
          ]),
        category: new FormControl(this.article.category, Validators.required),
        // author: new FormControl(this.user.username, Validators.required),
        author: new FormControl(this.article.author, Validators.required),
        description: new FormControl(this.article.description, [
          Validators.required,
        ]),

      });
      
    });
  }

  updateName() {
    this.article.title = this.newArtForm.get('title').value;
    // console.log(this.article.title)
  }

  chooseIc() {    
    this.article.artColors[2] = this.newArtForm.value.faIcon;
  }


  addArticle() {
    if(this.router.url != '/dodaj-artykul') {
      let art = new Article(
      
        [this.tcolor, this.bcolor, this.newArtForm.value.faIcon],
        this.newArtForm.value.title,
        this.newArtForm.value.category,
        this.newArtForm.value.description,
        this.article.likes,
        new Date().toDateString(),
        this.newArtForm.value.author,
        this.article.user
      );

      this.articleService.editArticle(art, this.article._id)
      .subscribe(
        data => {
          console.log('OK',data);
          art = data;
          this.success = 'Artukuł został zauktualizowany'
          setTimeout(() => this.success = null, 4000);
          this.onReset();
        },

        err => {
          if (err.status === 422) {
            this.error = 'Artykuł o podanym tytule już istnieje. Wybierz inną nazwę i spróbuj ponownie'
            setTimeout(() => this.error = null, 4000);
          }
          else if (err.status === 403) {
            this.error = 'Nie masz uprawnień do edycji wybranego artykułu'
            setTimeout(() => this.error = null, 4000);
          }
          else {
            this.error = 'Podczas wysyłania artykułu wystąpił nieoczekiwany błąd. Spróbuj ponownie'
            console.log("errrr "+ err);
          }

        }
      );
    }
    else {
      let art = new Article(
      
        [this.tcolor, this.bcolor, this.newArtForm.value.faIcon],
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
          console.log('OK', art);
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
          else if (err.status === 401) {
            this.authService.logout();    
            this.router.navigate(
              ['/konto/logowanie'],
              { queryParams: { returnUrl: 'dodaj-artykul', name: 'authError' } }   
            );     
          }
          else {
            this.error = 'Podczas wysyłania artykułu wystąpił nieoczekiwany błąd. Spróbuj ponownie'
            console.log("errrr "+ err);
          }

        }
      );
    }


    
  }

  onReset() {
    this.reset = true;
    console.log('Reset status: ', this.reset);
    this.article.title = '';
    this.tcolor = '#fcfcfc';
    this.bcolor = '#14563e';
    this.article.artColors[2] = this.iconsArray[0];

    // przypisanie polom wartości domyslnych
    this.newArtForm.reset({
      colorText: this.article.artColors[0],
      colorBgr: this.article.artColors[1],
      faIcon: this.iconsArray[0],
      // author: this.user.username,
      author: '',
      category: this.catOptions[0].value
    });
  }

  ngOnDestroy() {
    this.art.unsubscribe();
  }


}
