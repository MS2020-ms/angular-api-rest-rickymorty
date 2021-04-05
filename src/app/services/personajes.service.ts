//importar HttpClient
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
interface Personaje {
  name: string;
  species: string;
  location: {name: string}

}
export interface Api {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  },
  results: Personaje[]
}
*/

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  //creo variable baseUrl para url que se va a repetir
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api/character';
  }

  //getAll() {
  //return this.httpClient.get<any>(this.baseUrl).toPromise();
  //}

  //<any> porque la api devuelve info{} y results[], devuelve cualquier cosa: info, results, error. <any> para APIs externas
  getAll(pPage: number = 1): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`).toPromise();
  }


}
