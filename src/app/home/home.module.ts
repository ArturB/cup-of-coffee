import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeUsComponent } from './pages/home-us/home-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { ArticleComponent } from './pages/category/article/article.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';

import { CollapsedCategoryComponent } from './components/collapsed-category/collapsed-category.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SelectedCategoryComponent } from './pages/category/selected-category/selected-category.component';

@NgModule({
  declarations: [
    AddArticleComponent, 
    UserAccountComponent, 
    CategoryComponent, 
    ArticleComponent,
    HomeUsComponent, 
    CollapsedCategoryComponent, 
    NotFoundComponent, SelectedCategoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    CollapsedCategoryComponent
  ]
})
export class HomeModule { }
