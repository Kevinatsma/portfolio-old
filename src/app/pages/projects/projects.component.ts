import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject();
  notification;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.notification$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(this.showNotification)
  }

  showNotification = (notification) => {
    console.log(notification);
    if (_.isNil(notification)) {
      this.notification = notification;
      return;
    }
    this.notification = {
      title: _.get(notification, 'title'),
      message: _.get(notification, 'message'),
      description: _.get(notification, 'description'),
      icon: _.get(notification, 'icon')
    };
    // setTimeout(() => {
    //   this.notification = undefined;
    // }, 5000);
  }

}
