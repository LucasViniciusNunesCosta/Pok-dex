import { Component, Input, OnInit } from '@angular/core';
import { ConsumindoAPIService } from 'src/app/consumindo-api.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  constructor(private service: ConsumindoAPIService) {}

  @Input() Pokedetalhes: any;
  
  ngOnInit(): void {
  }
}
