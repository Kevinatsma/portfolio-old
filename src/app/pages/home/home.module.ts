import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeroComponent } from './hero/hero.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  HomeComponent,
  ProjectsSectionComponent
];

@NgModule({
  declarations: [
    // HeroComponent,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
    // HeroComponent
  ]
})
export class HomeModule { }
