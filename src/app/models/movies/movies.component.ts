import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestGenericService } from 'src/app/core/services/request-generic.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any;
  page: number = 1;
  titlePage: string;
  constructor(
    private requestGeneric: RequestGenericService,
    private activeRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.getForGenre(params.genre);
      this.titlePage = params.genre;

    }
    );
  }

  getForGenre(genre?) {
    let url;
    if (genre) {
      url = `${environment.url}discover/movie?api_key=` + `${environment.api_key}` + `&language=en-US&page=` + this.page + `&with_genres=` + genre + `+&with_watch_monetization_types=free`;
    } else {
      url = `${environment.url}discover/movie?api_key=` + `${environment.api_key}` + `&language=en-US&page=` + this.page + `+&with_watch_monetization_types=free`
    }

    this.requestGeneric.get(url).subscribe((resp) => {
      console.log('GG', resp);
      this.movies = resp;
    }, (error) => {
      console.error(error)
    });
  }

  more() {
    this.page = this.page + 1;
    this.activeRoute.queryParams.subscribe(params => {
      this.getForGenre(params.genre);
      this.titlePage = params.genre;
    }
    );
  }

  minus() {
    this.page = this.page - 1;
    this.activeRoute.queryParams.subscribe(params => {
      this.getForGenre(params.genre);
      this.titlePage = params.genre;
    }
    );
  }
}
