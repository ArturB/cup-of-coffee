import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from "./auth-routing.module";

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


// const AuthRoutes: Routes = [
//   { path: '', redirectTo: 'logowanie', pathMatch: 'full' },
//   { path: 'logowanie', component: LoginComponent },
//   { path: 'rejestracja', component: RegisterComponent },
// ];

@NgModule({
  declarations: [
    AuthComponent, 
    LoginComponent, 
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    AuthRoutingModule,
    // RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthModule { }
