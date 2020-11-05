import { Component, OnInit } from '@angular/core';
import { Camiseta } from './Camiseta';

@Component({
  selector: 'app-lista-camisetas',
  templateUrl: './lista-camisetas.component.html',
  styleUrls: ['./lista-camisetas.component.scss']
})
export class ListaCamisetasComponent implements OnInit {

  camisetas : Camiseta[] = [
    {
      "equipo": "Boca",
      "temporada": 2020,
      "precio": 5500,
      "stock": 5,
      "imagen": "assets/images/boca2020.jpg",
      "oferta": false,
    },
    {
      "equipo": "Barcelona",
      "temporada": 2020,
      "precio": 6000,
      "stock": 0,
      "imagen": "assets/images/barcelona2020.jpg",
      "oferta": true,
    },
    {
      "equipo": "Argentina",
      "temporada": 2020,
      "precio": 10000,
      "stock": 11,
      "imagen": "assets/images/argentina2020.jpg",
      "oferta": false,
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
