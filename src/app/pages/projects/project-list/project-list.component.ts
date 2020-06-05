import { Component, OnInit, Renderer2 } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import * as _ from 'lodash';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [1, 2];
  debounceDelay = 500;

  observeScroll = _.throttle((event: any): void => {
    this.observeScrollDown();
  }, this.debounceDelay);

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.observeScroll, true);
  }

  observeScrollDown = () => {
    console.log('scroll fired');
  }

  elementInView(i: number): boolean {
    const id = `project-item-${i}`;
    console.log('im called', id);
    const target =  document.getElementById(id);
    if (!target.classList.contains('loaded')) {
      const clientRect = this.utils.getClientRect(target);
      const elementInView = this.utils.isElementInView(clientRect, this.utils.getScreen());
      // console.log('element in view', elementInView);
      console.log('elements in view', id, elementInView.half || elementInView.fully);
      if (elementInView.half || elementInView.fully) {
        target.classList.add('loaded');
        return true;
      }
    } else {
      return true;
    }
  }
}
