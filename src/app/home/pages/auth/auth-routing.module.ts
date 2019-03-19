import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// import { UserAccountComponent } from '../user-account/user-account.component';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const authRoutes: Routes = [
  { path: '', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'logowanie', pathMatch: 'full' },
      { path: 'logowanie', component: LoginComponent },
      { path: 'rejestracja', component: RegisterComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }