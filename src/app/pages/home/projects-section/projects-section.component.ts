import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./../home.component.scss', './projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  ctaText = "Explore projects";

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToProjectPage() {
    const URL = ['/projects'];
    this.router.navigate(URL, {relativeTo: this.route});
  }

}
