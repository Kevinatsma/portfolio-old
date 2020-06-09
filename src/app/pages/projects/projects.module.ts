import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  ProjectsComponent,
  ProjectListComponent,
  ProjectItemComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
