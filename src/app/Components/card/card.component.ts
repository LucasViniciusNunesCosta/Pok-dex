import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './PokeInterface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  limit: number = 10;
  offset: number = 10;
  url: string = "https://pokeapi.co/api/v2/pokemon/2"

  pokemon: Pokemon | any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(data => {
      console.log(data);
      this.pokemon = data;
    });
  }

}
