import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperimentsComponent } from './pages/experiments/experiments/experiments.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'Website - Homepage' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { state: 'Website - Projects' }
  },
  {
    path: 'experiments',
    component: ExperimentsComponent,
    data: { state: 'Website - Experiments' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
