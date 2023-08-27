import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './auth/users/users.component';

const routes: Routes = [
  {
    path: 'auth',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'lista-users', component: UsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
