import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Article } from '../../../../core/models/article.model';
import { ArticleService } from '../../../../core/services/article.service';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent implements OnInit {
  
  articles: Article[] = [];

  category: string;

  showFour: boolean = false;

  constructor(private route: ActivatedRoute, articleService: ArticleService) { 
    this.category = this.route.snapshot.params['category'];
    this.articles = articleService.getArticleByCategory(this.category);
    console.log("Kategoria: ", this.category);
  }
  
  ngOnInit() {
    // this.articles = this.articleService.getArticleByCategory(this.category);
  }

}
