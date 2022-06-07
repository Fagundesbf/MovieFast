import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 7,
    spaceBetween: 0,
    breakpoints: {
          380: {
        slidesPerView: 1,
        spaceBetween: 0
      },
          500: {
        slidesPerView: 1,
        spaceBetween: 0
      },
          620: {
        slidesPerView: 2,
        spaceBetween: 30
      },
          720: {
        slidesPerView: 2,
        spaceBetween: 30
      },
          1210: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
