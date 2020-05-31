import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from './pipes/file-size.pipe';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { MaterialModule } from './material.module';
import { ImageLoaderDirective } from './directives/image-loader/image-loader.directive';
import { DialogsModule } from './dialogs/dialogs.module';

@NgModule({
  declarations: [
    FileSizePipe,
    RoundNumberPipe,
    DropZoneDirective,
    ImageLoaderDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DialogsModule
  ],
  exports: [
    FileSizePipe,
    RoundNumberPipe,
    DropZoneDirective,
    ImageLoaderDirective,
    DialogsModule
  ]
})
export class SharedModule { }
