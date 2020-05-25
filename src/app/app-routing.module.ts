import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './core/user/login/login.component';
import { SignupComponent } from './core/user/sign-up/signup.component';
import { ProfileComponent } from './core/user/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    data: { state: 'Website - Homepage' }
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
