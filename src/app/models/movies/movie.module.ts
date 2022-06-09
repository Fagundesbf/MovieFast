import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from './../../shared/shared.module';

import { MoviesComponent } from './movies.component';
@NgModule({
  declarations: [
    MoviesComponent,

  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NgxUsefulSwiperModule,
    SharedModule
  ]
})
export class MoviesModule { }
