import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RequestGenericService } from '../services/request-generic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres:any;

  constructor(
    private requestGeneric: RequestGenericService,
    private router: Router) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.requestGeneric.get(`${environment.url}genre/movie/list?api_key=` + `${environment.api_key}`).subscribe((resp) => {
      console.log('resultGG', resp);
      this.genres = resp;
    }, (error) => {
      console.error(error)
    });
  }

  goFilm(item){
    console.log('item', item);
    this.router.navigate(
      ['/movies'],
      { queryParams: { genre: item.name } }
    );
  }
}
