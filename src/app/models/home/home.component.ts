import { Component, OnInit } from '@angular/core';

import { RequestGenericService } from 'src/app/core/services/request-generic.service';

import { SwiperOptions } from 'swiper';

import { environment } from 'src/environments/environment';
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
        spaceBetween: 50
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 70
      },
      770: {
        slidesPerView: 4,
        spaceBetween: 50
      },
      944: {
        slidesPerView: 4,
        spaceBetween: 50
      }
      ,
      980: {
        slidesPerView: 4,
        spaceBetween: 50
      },
      988: {
        slidesPerView: 4,
        spaceBetween: 50
      }
      ,
      1020: {
        slidesPerView: 6,
        spaceBetween: 50
      }
      ,
      1240: {
        slidesPerView: 6,
        spaceBetween: 50
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
  populares: any =[]
  freeMovies: any =[]

  constructor(private requestGeneric: RequestGenericService,
  ) { }

  ngOnInit() {
    this.getMoviePopular();
    this.getFreeMovies();
  }

  getMoviePopular() {
    this.requestGeneric.get(`${environment.url}movie/popular?api_key=` + `${environment.api_key}` + '&page=1').subscribe((resp) => {
      this.populares = resp
    }, (error) => {
      console.error(error)
    })
  }
  getFreeMovies(){
    this.requestGeneric.get(`${environment.url}movie/top_rated?api_key=` + `${environment.api_key}` + '&page=1').subscribe((resp) => {
      this.freeMovies = resp
    }, (error) => {
      console.error(error)
    })
  }
}
