import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header.service';
import { TranslationService } from 'src/app/core/services/translation.service';
import { LanguageCodes } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private headerService: HeaderService,
              private translationService: TranslationService) {
    this.headerService.setMenuActive(true);
    this.translationService.changeLanguage(LanguageCodes.NL);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
