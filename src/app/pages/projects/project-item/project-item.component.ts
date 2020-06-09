import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/app/shared/constants/project.constants';
import { ViewLayouts, ITechDescription } from 'src/app/shared/constants/general.contants';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() index: number;
  @Input() project: IProject;
  @Input() layout: ViewLayouts;
  public viewLayouts = ViewLayouts;
  public notification;
  baseURL = './assets/img/projects/';

  constructor(public utils: UtilsService,
              private projectsService: ProjectsService) {}

  ngOnInit(): void {
    console.log('component started');
  }

  getImageURL(project: IProject) {
    return `${this.baseURL}${project.img}.jpg`;
  }

  goToProject = (project: IProject) => {
    console.log(project);
  }

  techTooltip(tech: ITechDescription) {
    const tooltip = {
      title: tech.title,
      description: tech.description,
      icon: this.utils.getTechStackImg(tech)
    };
    console.log('Tooltip', tooltip);
    this.projectsService.notification$.next(tooltip);
  }

  resetTooltip() {
    this.projectsService.notification$.next(undefined);
  }
}
