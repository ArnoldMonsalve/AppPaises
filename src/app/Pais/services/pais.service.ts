import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //url para consumir la api de paises
  private apiUrl:string='https://restcountries.com/v2'
  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<any>{
    const urlconcatenada=`${this.apiUrl}/name/${termino}`;
    return this.http.get(urlconcatenada);

  }


}
