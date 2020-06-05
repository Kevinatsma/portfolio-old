import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { ExperimentsModule } from './experiments/experiments.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ProjectsModule,
    ExperimentsModule
  ],
  exports: [
    HomeModule
  ]
})
export class PagesModule { }
