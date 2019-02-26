import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SearchFormComponent } from './layout/search-form/search-form.component';

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent,
    SearchFormComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent, 
    HeaderComponent,
    SearchFormComponent
    
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() core:CoreModule ){
  //   if (core) {
  //       throw new Error("You should import core module only in the root module")
  //   }
  // }
 }
