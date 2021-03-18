import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from '../shared/services/local-storage.service';
import {ConstantService} from '../shared/services/constant.service';
import {GeneratorService} from '../shared/services/generator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: LocalStorageService, useClass: LocalStorageService},
    {provide: ConstantService, useValue: ConstantService},
    {provide: GeneratorService, useFactory: GeneratorService, deps: []}
  ]
})
export class AboutModule { }
