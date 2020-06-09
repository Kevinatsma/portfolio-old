import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiment-section',
  templateUrl: './experiment-section.component.html',
  styleUrls: ['./../home.component.scss', './experiment-section.component.scss']
})
export class ExperimentSectionComponent implements OnInit {
  ctaText = "Explore experiments";

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToExperimentsPage() {
    const URL = ['/experiments'];
    this.router.navigate(URL, {relativeTo: this.route});
  }
}
