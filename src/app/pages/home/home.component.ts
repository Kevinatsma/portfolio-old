import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private headerService: HeaderService) {
    this.headerService.setMenuActive(true);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
