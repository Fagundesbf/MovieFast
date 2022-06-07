import { Component, OnInit } from '@angular/core';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 7,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 90
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 70
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 70
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 70
      },
      770: {
        slidesPerView: 4,
        spaceBetween: 70
      },
      944: {
        slidesPerView: 4,
        spaceBetween: 70
      }
      ,
      980: {
        slidesPerView: 4,
        spaceBetween: 70
      },
      988: {
        slidesPerView: 4,
        spaceBetween: 70
      }
      ,
      1020: {
        slidesPerView: 6,
        spaceBetween: 70
      }
      ,
      1240: {
        slidesPerView: 7,
        spaceBetween: 70
      }
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
