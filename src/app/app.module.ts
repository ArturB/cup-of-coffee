import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// czasowo zaiportowany moduł
import { HomeModule } from './home/home.module';
// import { AuthModule } from './home/home.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // angular
    BrowserModule,

    SlimLoadingBarModule,

    // core & shared
    CoreModule,
    SharedModule,
    HomeModule,
  
    // app
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
