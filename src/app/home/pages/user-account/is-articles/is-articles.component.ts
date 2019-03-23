import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
// import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-is-articles',
  templateUrl: './is-articles.component.html',
  styleUrls: ['./is-articles.component.css']
})
export class IsArticlesComponent implements OnInit, OnDestroy {

  @Input() artLength: number;
  @Input() selCat: string;
  @Output() selectCat = new EventEmitter();
    
  catOptions = [
    { name: 'Wszystkie', value: 'wszystkie'},
    { name: 'Nauka', value: 'nauka'},
    { name: 'Sztuka', value: 'sztuka'},
    { name: 'Filozofia', value: 'filozofia'},
    { name: 'Psychologia', value: 'psychologia'}
  ];

  selectedCat: string;

  // category: string;

  constructor() { }

  ngOnInit() {
    this.selectedCat = this.selCat != undefined ?  this.selCat : this.catOptions[0].value;
    console.log('dd', this.selectedCat)
  }

  
  selectCategory() {
    // this.selectedCat = this.selCat;
    console.log(this.selectedCat);
    this.selectCat.emit(this.selectedCat);
    // this.artsSub.subscribe(data => {
    //   // this.articles = data;
    //   if (this.selectedCat != 'wszystkie') {
    //     this.articles = data.filter(e => e.category === this.selectedCat); // pomijamy drugi element ze strumienia
    //     console.log(this.articles)

    //   }
    //   else {
    //     this.articles = data;
    //   }
      
    //   console.log('User arts: ', this.articles, data);

    // });
  }

  ngOnDestroy() {

  }

}
