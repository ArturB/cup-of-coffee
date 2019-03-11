import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '../home/home-routing.module';

// import { ArticleService } from './services/article.service';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
// import { SearchFormComponent } from './layout/search-form/search-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent,
    // SearchFormComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    SharedModule
  ],
  exports: [
    FooterComponent, 
    HeaderComponent,
    // SearchFormComponent
    
  ],
  providers: [],
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() core:CoreModule ){
  //   if (core) {
  //       throw new Error("You should import core module only in the root module")
  //   }
  // }
 }
