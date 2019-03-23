import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  searchText: string = '';
  searchPlaceholder: string = 'Szukaj ...';

  goSearch: boolean = false;

  @Output() searchValue = new EventEmitter();

  catOptions = [
    { name: 'Wszystkie kategorie', value: 'wszystkie'},
    { name: 'Nauka', value: 'nauka'},
    { name: 'Sztuka', value: 'sztuka'},
    { name: 'Filozofia', value: 'filozofia'},
    { name: 'Psychologia', value: 'psychologia'}
  ];

  selectedCat: string;

  @ViewChild('mySearch') mySearch: ElementRef;

  // triggerFalseClick() {
  //     let el: HTMLElement = this.mySearch.nativeElement as HTMLElement;
  //     // console.log(el.click());
  //     el.click();
  // }

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['text']) {
        // this.doSearch(params['term'])
        this.searchText = params['text'];
        this.selectedCat = params['category']
        this.mySearch.nativeElement.click();
      }
      else {
        // this.doSearch(params['term'])
        this.searchText = '';
        this.selectedCat = this.catOptions[0].value;
      }
    });
    // this.searchText = "";
    // this.searchPlaceholder = "Szukaj ...";
    // this.selectedCat = this.catOptions[0].name;
  }

  selectCategory() {
    // this.selectedCat = this.selCat;
    console.log(this.selectedCat);
    return this.selectedCat;
    // this.selectCat.emit(this.selectedCat);
  }

  onSearch() {
    // this.searchText = isSearch;
    // console.log('search', isSearch);
    console.log('sel0t', this.searchText);

    if(this.router.url != '/kategorie/' + this.selectedCat) {
      let text: string = this.searchText;
      this.router.navigate(['kategorie/',this.selectedCat, {text: text, category: this.selectedCat}]);
    } 

    this.searchValue.emit(this.searchText);
    



  }

}
