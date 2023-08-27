import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersComponent } from './auth/users/users.component';


@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule
  ]
})
export class PagesModule { }
