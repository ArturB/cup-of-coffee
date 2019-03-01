import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { HomeUsComponent } from './pages/home-us/home-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { ArticleComponent } from './pages/article/article.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
 
const routes: Routes = [
  { path: '',   component: HomeUsComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'add-article', component: AddArticleComponent},
  { path: 'user-account', component: UserAccountComponent},
  { path: '**', component: NotFoundComponent }
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}