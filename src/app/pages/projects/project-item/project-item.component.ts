import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('component started');
  }

}
