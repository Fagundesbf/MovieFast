import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RequestGenericService } from 'src/app/core/services/request-generic.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  itens: any;
  subTitleModal: string;
  urlTrailerModal: string;
  modalTrailer: any;
  titleModal: any;

  constructor(
    private requestGeneric: RequestGenericService,
    private activeRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    let id = this.activeRoute.snapshot.params["id"];
    this.getMovieId(id);
    this.getTrailer(id);
  }

  getMovieId(id) {
    this.requestGeneric.get(`${environment.url}movie/` + id + `?api_key=` + `${environment.api_key}` + '&language=en-US').subscribe((resp) => {
      this.itens = resp;
      console.log('Itens', this.itens);
    }, (error) => {
      console.error(error);
    });
  }

  getTrailer(id) {
    this.requestGeneric.get(`${environment.url}movie/` + id + `/videos?api_key=` + `${environment.api_key}` + '&page=1').subscribe((resp) => {
      this.titleModal = resp['results'][0].title;
      this.subTitleModal = resp['results'][0].name + ' - ' +  resp['results'][0].original_language;
      this.urlTrailerModal = 'https://www.youtube.com/embed/' + resp['results'][0].key + '?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=nn&amp;modestbranding=1&amp;fs=1&amp;autohide=1';
    }, (error) => {
      console.error(error);
    });
  }

  reciverFeedback(respostaFilho) {
  }

  closeModal(event) {
    this.modalTrailer = event;
  }

  openModal() {
    this.modalTrailer = true;
  }

  openTrailer(trailer) {
    this.getTrailer(trailer);

    this.openModal();
  }
}

