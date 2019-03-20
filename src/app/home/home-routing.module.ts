import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { HomeUsComponent } from './pages/home-us/home-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { SelectedCategoryComponent } from './pages/category/selected-category/selected-category.component';
import { ArticleComponent } from './pages/category/article/article.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AuthComponent } from './pages/auth/auth.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {path: 'kategorie',   component: HomeUsComponent},
  {path: '', redirectTo: 'kategorie', pathMatch: 'full'},
  {path: 'kategorie/:category', component: CategoryComponent,
    children: [
      {path: '', component: SelectedCategoryComponent},
      {path: 'artykul/:_id', component: ArticleComponent}
    ]
  },
  // { path: 'kategoria/artykul/:articleId', component: ArticleComponent},
  {path: 'dodaj-artykul', component: AddArticleComponent, canActivate: [AuthGuard]},
  {path: 'edytuj-artykul:articleId', component: EditArticleComponent},
  {path: 'konto', loadChildren: './pages/auth/auth.module#AuthModule'},
  {path: 'moje-konto', component: UserAccountComponent, canActivate: [AuthGuard],
    // children: [
    //   {path: 'moje-artykuly', component: SelectedCategoryComponent},
    //   {path: 'artykul/:title', component: ArticleComponent}
    // ]
  },

  // { path: 'konto', component: UserAccountComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
  // {path: '**', component: NotFoundComponent }
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}