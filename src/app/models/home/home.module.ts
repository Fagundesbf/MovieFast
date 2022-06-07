import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TrailerComponent } from './components/trailer/trailer.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CarouselComponent,
    TrailerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule




  ]
})
export class HomeModule { }
