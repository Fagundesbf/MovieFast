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

  constructor(
    private requestGeneric: RequestGenericService,
    private activeRoute: ActivatedRoute
  ) {

   }

  ngOnInit() {
    let id = this.activeRoute.snapshot.params["id"];
    this.getMovieId(id)
  }

  getMovieId(id){
    this.requestGeneric.get(`${environment.url}movie/`+id+`?api_key=`+`${environment.api_key}`+'&language=en-US').subscribe((resp) => {
      console.log('result TTTTT', resp);
      this.itens = resp;
    }, (error) => {
      console.error(error)
    })
  }
}

