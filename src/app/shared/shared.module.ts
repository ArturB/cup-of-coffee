import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { SearchFormComponent } from './components/search-form/search-form.component';


@NgModule({
  declarations: [LoaderComponent, SearchFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFormComponent
  ]
})
export class SharedModule { }
