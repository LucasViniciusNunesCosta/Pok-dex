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

  constructor(private http: HttpClient) {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(pokemonName: string):Observable<Pokemon>{
    this.pokedata = this.http.get<Pokemon>(`${this.baseUrl}${pokemonName}`)
    return this.pokedata;
  }
}
