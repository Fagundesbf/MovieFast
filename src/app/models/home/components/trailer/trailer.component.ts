import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {

  trailers: any;
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
  modalTrailer: boolean;
  titleModal: string;
  subTitleModal: string;
  urlTrailerModal: any;

  constructor(
    private requestGeneric: RequestGenericService,
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.requestGeneric.get(`${environment.url}movie/upcoming?api_key=` + `${environment.api_key}` + '&page=1').subscribe((resp) => {
      this.trailers = resp;
    }, (error) => {
      console.error(error)
    })
  }

  openTrailer(trailer) {
    this.getTrailer(trailer);
    this.titleModal = trailer.title;
    this.openModal();
  }

  closeModal(event) {
    this.modalTrailer = event;
  }

  openModal() {
    this.modalTrailer = true;
  }

  reciverFeedback(respostaFilho) {
  }

  getTrailer(item) {
    this.requestGeneric.get(`${environment.url}movie/` + item.id + `/videos?api_key=` + `${environment.api_key}` + '&page=1').subscribe((resp) => {
      this.subTitleModal = resp['results'][0].name + ' - ' + item.original_language;
      this.urlTrailerModal = 'https://www.youtube.com/embed/' + resp['results'][0].key + '?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=nn&amp;modestbranding=1&amp;fs=1&amp;autohide=1';
    }, (error) => {
      console.error(error)
    });
  }
}
