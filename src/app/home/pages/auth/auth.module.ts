import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// import { authRouting } from "./auth-routing.module";

const AuthRoutes: Routes = [
  { path: '', redirectTo: 'zaloguj', pathMatch: 'full' },
  { path: 'zaloguj', component: LoginComponent },
  { path: 'zarejestruj', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AuthComponent, 
    LoginComponent, 
    RegisterComponent,
  ],
  imports: [
    // CommonModule,
    // authRouting
    RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthModule { }
