import { Routes, RouterModule } from '@angular/router';
 
// import { UserAccountComponent } from '../user-account/user-account.component';

// import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AuthRoutes: Routes = [
  { path: '', redirectTo: 'zaloguj', pathMatch: 'full' },
  { path: 'zaloguj', component: LoginComponent },
  { path: 'zarejestruj', component: RegisterComponent },
];
 
export const authRouting = RouterModule.forChild(AuthRoutes);
