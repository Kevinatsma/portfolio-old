import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { ComponentsModule } from '../components/components.module';

const MODULES = [
  HomeModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class PagesModule { }
