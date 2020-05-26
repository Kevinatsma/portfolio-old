import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCodes } from 'src/app/shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) { }

  changeLanguage(language: LanguageCodes) {
    this.translate.use(language);
  }
}
