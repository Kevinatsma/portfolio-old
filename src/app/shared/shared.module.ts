import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from './pipes/file-size.pipe';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { MaterialModule } from './material.module';
import { ImageLoaderDirective } from './directives/image-loader/image-loader.directive';
import { DialogsModule } from './dialogs/dialogs.module';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SlicedButtonComponent } from './components/sliced-button/sliced-button.component';

const COMPONENTS = [
  PrimaryButtonComponent,
  SlicedButtonComponent
];

@NgModule({
  declarations: [
    FileSizePipe,
    RoundNumberPipe,
    DropZoneDirective,
    ImageLoaderDirective,
    ...COMPONENTS
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
    DialogsModule,
    ...COMPONENTS
  ]
})
export class SharedModule { }
