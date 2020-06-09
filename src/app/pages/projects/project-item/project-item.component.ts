import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/app/shared/constants/project.constants';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() index: number;
  @Input() project: IProject;
  baseURL = './assets/img/projects/';

  constructor() { }

  ngOnInit(): void {
    console.log('component started');
  }

  getImageURL(project: IProject) {
    return `${this.baseURL}${project.img}.jpg`;
  }

}
