import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})
export class ViewPokemonComponent implements OnInit {

nome: any = "";
id: any = "";
img: any = "";

  constructor(private rotaAtiva: ActivatedRoute) {
    this.rotaAtiva.paramMap.subscribe((rotaAtiva) => {
      this.nome = this.rotaAtiva.snapshot.paramMap.get('nome');
      this.id = this.rotaAtiva.snapshot.paramMap.get('id');
      this.img = this.rotaAtiva.snapshot.paramMap.get('img');
  });
  }

  ngOnInit(): void {
  }

}
