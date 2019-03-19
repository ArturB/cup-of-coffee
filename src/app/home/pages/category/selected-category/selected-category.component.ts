import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedCategoryComponent implements OnInit {
  
  articles: Article[] = [];

  category: string;

  showFour: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    // public cdRef:ChangeDetectorRef
    ) { 
    
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.category = param.get('category');
    });
    console.log("category: ", this.category);

  }


}
