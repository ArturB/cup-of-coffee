import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedCategoryComponent implements OnInit {
  
  // @Output() searchValue = new EventEmitter();
  
  articles: Article[] = [];

  category: string;

  showFour: boolean = false;

  searchText;


  constructor(
    private route: ActivatedRoute, 
    ) { 
    
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.category = param.get('category');
    });
    console.log("category: ", this.category);

  }

  searchVal(text: string) {
    this.searchText = text;
    // this.searchValue.emit(text);
    
  }


}
