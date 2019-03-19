import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { HomeRoutingModule } from './home-routing.module';

// import { AuthModule } from './pages/auth/auth.module';

import { SharedModule } from '../shared/shared.module';

import { HomeUsComponent } from './pages/home-us/home-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { SelectedCategoryComponent } from './pages/category/selected-category/selected-category.component';
import { ArticleComponent } from './pages/category/article/article.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AddArticleComponent, 
    EditArticleComponent,
    UserAccountComponent, 
    CategoryComponent, 
    SelectedCategoryComponent,
    ArticleComponent,
    HomeUsComponent, 
    NotFoundComponent,  
     
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    ColorPickerModule,
    HomeRoutingModule,
    // AuthModule,
    SharedModule
  ],
  exports: [
    // CollapsedCategoryComponent,
    // CollapsedArticleComponent
  ]
})
export class HomeModule { }
