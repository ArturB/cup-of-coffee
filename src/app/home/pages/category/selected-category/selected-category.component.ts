import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html'
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedCategoryComponent implements OnInit {
    
  articles: Article[] = [];

  category: string;

  showFour: boolean = false;

  searchText;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.category = param.get('category');
    });
    console.log("category: ", this.category);

  }

  searchVal(text: string) {
    this.searchText = text;
    
  }


}
