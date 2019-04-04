import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-is-articles',
  templateUrl: './is-articles.component.html',
  styleUrls: ['./is-articles.component.css']
})
export class IsArticlesComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
    this.selectedCat = this.selCat != undefined ?  this.selCat : this.catOptions[0].value;
  }

  
  selectCategory() {
    this.selectCat.emit(this.selectedCat);
   
  }

}
