import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeComponent } from './home.component';

const COMPONENTS = [
  HomeComponent,
  HomeHeroComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
  ],
  exports: [...COMPONENTS]
})
export class HomeModule { }
