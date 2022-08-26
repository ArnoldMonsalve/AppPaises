import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  //optimización global para no copiar y pegar en todos las funciones
  get HttpHeaders(){
  return  new  HttpHeaders().set( 'fields', 'name,capital,alpha2code,flag,population' );

  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion( termino: string ): Observable<Country[]> {
    //los headers optimizan la búsqueda pidiéndole que traigas solo ciertos campos del servicio y el subscribe sea mas optimo en este caso aplicado a una api, asi se llaman de forma local revisarlo para aplicar en la migración
    const headers = new  HttpHeaders()
    .set( 'fields', 'name,capital,alpha2code,flag,population' );

    const url = `${ this.apiUrl }/regionalbloc/${ termino }`;

    return this.http.get<Country[]>( url, {headers} ).pipe(
      tap(console.log)
    );
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    //llamando los headers globales
    return this.http.get<Country[]>( url,{headers:this.HttpHeaders} );
  }

  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

}
