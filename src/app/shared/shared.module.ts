import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { CollapsedArticleComponent } from './components/collapsed-article/collapsed-article.component';
import { BtnSeeMoreComponent } from './components/buttons/btn-see-more/btn-see-more.component';


@NgModule({
  declarations: [LoaderComponent, CollapsedArticleComponent, BtnSeeMoreComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CollapsedArticleComponent,
    BtnSeeMoreComponent
    
  ]
})
export class SharedModule { }
