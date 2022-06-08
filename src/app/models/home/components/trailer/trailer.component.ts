import { Component, OnInit } from '@angular/core';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 7,
    autoplay: {
      delay: 3000,
    },
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
  };
  trailers: any;
  constructor(private requestGeneric: RequestGenericService) { }

  ngOnInit() {
    this.getMovie();

  }

  getMovie(){
    this.requestGeneric.get(`${environment.url}movie/upcoming?api_key=` + `${environment.api_key}` + '&page=1').subscribe((resp) => {
      console.log('result', resp);
       this.trailers = resp;
    }, (error) => {
      console.error(error)
    })
  }
  // getMovie(){
  //   this.requestGeneric.get(`${environment.url}movie/`+ 550+`/images?api_key=` + `${environment.api_key}` + '&page=1').subscribe((resp) => {
  //     console.log('result', resp);
  //      this.trailers = resp;
  //   }, (error) => {
  //     console.error(error)
  //   })
  // }

}
