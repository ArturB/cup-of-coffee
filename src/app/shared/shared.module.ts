import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CollapsedArticleComponent } from './components/collapsed-article/collapsed-article.component';


@NgModule({
  declarations: [LoaderComponent, SearchFormComponent, CollapsedArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFormComponent,
    CollapsedArticleComponent
    
  ]
})
export class SharedModule { }
