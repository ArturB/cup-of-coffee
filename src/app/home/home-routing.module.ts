import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { HomeUsComponent } from './pages/home-us/home-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { SelectedCategoryComponent } from './pages/category/selected-category/selected-category.component';
import { ArticleComponent } from './pages/category/article/article.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AuthComponent } from './pages/auth/auth.component';
 
const routes: Routes = [
  { path: 'kategorie',   component: HomeUsComponent},
  { path: '', redirectTo: 'kategorie', pathMatch: 'full'},
  { path: 'kategorie/:category', component: CategoryComponent,
    children: [
      {path: '', component: SelectedCategoryComponent},
      {path: 'artykul/:articleId', component: ArticleComponent}
    ]
  },
  // { path: 'kategoria/artykul/:articleId', component: ArticleComponent},
  { path: 'dodaj-artykul', component: AddArticleComponent},
  {path: 'konto', loadChildren: './pages/auth/auth.module#AuthModule'},

  // { path: 'konto', component: UserAccountComponent},
  { path: '**', component: NotFoundComponent }
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}