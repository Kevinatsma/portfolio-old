import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { AuthGuard } from './guards/auth.guard';
import { TranslationService } from './services/translation.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // UserModule
  ],
  exports: [
    // UserModule
  ],
  providers: [
    AuthGuard,
    TranslationService
  ]
})
export class CoreModule { }
