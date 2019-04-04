import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '../home/home-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';

import { CollapsedCategoryComponent } from './components/collapsed-category/collapsed-category.component';
import { CollapsedArticleComponent } from './components/collapsed-article/collapsed-article.component';
import { BtnSeeMoreComponent } from './components/buttons/btn-see-more/btn-see-more.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

import { DropdownDirective } from './directives/dropdown.directive';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    CollapsedCategoryComponent,
    CollapsedArticleComponent,
    BtnSeeMoreComponent,
    SearchFormComponent,
    DropdownDirective,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    HomeRoutingModule
  ],
  exports: [
    HeaderComponent,
    CollapsedCategoryComponent,
    CollapsedArticleComponent,
    BtnSeeMoreComponent,
    SearchFormComponent,
    DropdownDirective,
    SearchPipe
  ]
})
export class SharedModule { }
