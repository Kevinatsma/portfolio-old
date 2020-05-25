import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
