import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '../home/home-routing.module';

import { LoaderComponent } from './components/loader/loader.component';
import { CollapsedCategoryComponent } from './components/collapsed-category/collapsed-category.component';
import { CollapsedArticleComponent } from './components/collapsed-article/collapsed-article.component';
import { BtnSeeMoreComponent } from './components/buttons/btn-see-more/btn-see-more.component';


@NgModule({
  declarations: [LoaderComponent, CollapsedCategoryComponent, CollapsedArticleComponent, BtnSeeMoreComponent],
  imports: [
    CommonModule,

    HomeRoutingModule
  ],
  exports: [
    CollapsedCategoryComponent,
    CollapsedArticleComponent,
    BtnSeeMoreComponent
    
  ]
})
export class SharedModule { }
