import { Component, OnInit, } from '@angular/core';
import {Pokemon} from 'src/app/PokeInterface'
import { ConsumindoAPIService } from 'src/app/consumindo-api.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  limit: number = 10;
  offset: number = 10;
  url: string = `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=${this.limit}"`;

  pokemon?: Pokemon;
  dados: any;

  constructor(private service: ConsumindoAPIService) { }

  ngOnInit(): void {
    this.service.getPokemon('1').subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            height: res.height,
            weight: res.weight,
            sprites: res.sprites,
            types: res.types,
          }
          this.dados = this.pokemon
        },
         //retorna a resposta
        error: (err) => console.log(err) //em caso de erro
      }
    )
    
  }

}
