import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './sign-up/signup.component';

const COMPONENTS = [
  ProfileComponent,
  SignupComponent,
  LoginComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ],
  exports: [...COMPONENTS]
})
export class UserModule { }
