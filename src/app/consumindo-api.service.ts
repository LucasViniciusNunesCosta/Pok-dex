import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pokemon} from 'src/app/PokeInterface'

@Injectable({
  providedIn: 'root'
})
export class ConsumindoAPIService {

  private baseUrl: string = '';
  pokedata: any;
  pokeDetails: any;
  pokemon?: Pokemon;

  limit: number = 0;
  offset: number = 0;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon():Observable<any>{
    this.pokedata = this.http.get<any>(this.baseUrl)
    return this.pokedata;
  }
  getPokeDetalhes(detalhes: string):Observable<any>{
    this.pokeDetails = this.http.get<any>(detalhes)
    console.log(detalhes);
    return this.pokeDetails;
  }
}
