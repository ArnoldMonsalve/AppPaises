import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //url para consumir la api de paises
  private apiUrl:string='https://restcountries.com/v2'
  constructor(private http: HttpClient) { }


  buscarPais(termino:string):Observable<Country[]>{
    const urlconcatenada=`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(urlconcatenada);


  }


}

    //el pipe es para que tome el error y devuelva un array vacio puede servir para manejo de errores
    /*.pipe(
      catchError(error => of([]) )
    );*/
