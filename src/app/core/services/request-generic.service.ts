import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RequestGenericService {

  httpOptions: { headers: HttpHeaders };


  constructor(
    private http: HttpClient,
  ) { }

  private setHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  get(url: string, useHeaders?: boolean) {
     return this.http.get(url, this.httpOptions).pipe(catchError((err) => {
        return throwError(err);
    }))
  }

}
