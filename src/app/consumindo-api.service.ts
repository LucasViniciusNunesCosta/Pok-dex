import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pokemon} from 'src/app/PokeInterface'

@Injectable({
  providedIn: 'root'
})
export class ConsumindoAPIService {

  pokedata: any;
  pokeDetails: any;
  pokemon?: Pokemon;

  limit: number = 20;
  offset: number = 0;
  baseUrl: string = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
  
  constructor(private http: HttpClient) {
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
  MorePokemon(){
    this.limit = this.limit+20;
    this.baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
  }
}
