import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import * as _ from 'lodash';
import { IProject, defaultProjects } from 'src/app/shared/constants/project.constants';
import { ViewLayouts, defaultViewLayouts, ViewLayout } from 'src/app/shared/constants/general.contants';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: IProject[] = defaultProjects;
  debounceDelay = 500;
  currentLayout = ViewLayouts.LIST;
  layouts = defaultViewLayouts;

  observeScroll = _.throttle((event: any): void => {
    return
  }, this.debounceDelay);

  constructor(public utils: UtilsService) { }

  ngOnInit(): void {
    this.setLayout(this.currentLayout);
  }

  setLayout(layoutType: ViewLayouts) {
    switch (layoutType) {
      case (ViewLayouts.FULL_SCREEN):
        return window.addEventListener('scroll', this.observeScroll, true);
      default:
        return window.removeEventListener('scroll', this.observeScroll, true);
    }
  }

  elementInView = (i: number): boolean => {
    if (this.currentLayout !== ViewLayouts.FULL_SCREEN) { return true };
    const id = `project-item-${i}`;
    const target =  document.getElementById(id);
    if (!target.classList.contains('loaded')) {
      return this.checkIfElementInView(target);
    } else {
      return true;
    }
  }

  checkIfElementInView(target: HTMLElement): boolean {
    const clientRect = this.utils.getClientRect(target);
    const elementInView = this.utils.isElementInView(clientRect, this.utils.getScreen());
    if (elementInView.half || elementInView.fully) {
      target.classList.add('loaded');
      return true;
    }
  }

  toggleLayout(layout: ViewLayouts) {
    this.currentLayout = layout;
    console.log(layout);
    this.setLayout(layout);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.observeScroll, true);
  }
}
