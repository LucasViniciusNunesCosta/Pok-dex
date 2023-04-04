import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/PokeInterface';
import { ConsumindoAPIService } from 'src/app/consumindo-api.service';

@Component({
  selector: 'lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
  pokemon?: Pokemon;

  dados: any;
  Pokemon_detalhes: any[] = [];
  url: any;

  constructor(private service: ConsumindoAPIService) {}

  ngOnInit(): void {
    this.service.getPokemon().subscribe({
      next: (res) => {
        //atribuindo a resposta recebida para a variavel dados
        this.dados = res.results;

        //pegando o tamanho do array retornado
        const pokemonsEncontrados = this.dados.length;

        //criando um laço de repetição para pegar os detalhes de cada pokemon
        for (let i: number = 0; i < pokemonsEncontrados; i++) {
          this.url = this.dados[i].url;

          this.service.getPokeDetalhes(this.url).subscribe({
            next: (retorno) => {
              this.pokemon = {
                id: retorno.id,
                name: retorno.name,
                height: retorno.height,
                weight: retorno.weight,
                sprites: retorno.sprites,
                types: retorno.types,
              };
              //inserindo os detalhes dos pokemons no array detalhes
              this.Pokemon_detalhes[i] = this.pokemon;
            },
            error: (err) => console.log('DEU RUIM'), //em caso de erro
          });
        }
      },
      //retorna a resposta
      error: (err) => console.log(err), //em caso de erro
    });
  }
}
