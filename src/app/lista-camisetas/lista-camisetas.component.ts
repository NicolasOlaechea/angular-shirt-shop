import { Component, OnInit } from '@angular/core';
import { CarroCamisetasService } from '../carro-camisetas.service';
import { Camiseta } from './Camiseta';

@Component({
  selector: 'app-lista-camisetas',
  templateUrl: './lista-camisetas.component.html',
  styleUrls: ['./lista-camisetas.component.scss']
})
export class ListaCamisetasComponent implements OnInit {

  camisetas : Camiseta[] = [
    {
      "equipo": "Argentina",
      "temporada": 2020,
      "precio": 10000,
      "stock": 11,
      "imagen": "assets/images/argentina2020.jpg",
      "oferta": false,
      "cantidad": 0,
    },
    {
      "equipo": "Boca",
      "temporada": 2020,
      "precio": 5500,
      "stock": 5,
      "imagen": "assets/images/boca2020.jpg",
      "oferta": false,
      "cantidad": 0,
    },
    {
      "equipo": "Barcelona",
      "temporada": 2020,
      "precio": 6000,
      "stock": 0,
      "imagen": "assets/images/barcelona2020.jpg",
      "oferta": false,
      "cantidad": 0,
    },
    {
      "equipo": "River",
      "temporada": 2011,
      "precio": 1,
      "stock": 11,
      "imagen": "assets/images/river2011.jpg",
      "oferta": true,
      "cantidad": 0,
    },
    {
      "equipo": "Manchester City",
      "temporada": 2020,
      "precio": 4999,
      "stock": 3,
      "imagen": "assets/images/mancity2020.jpg",
      "oferta": false,
      "cantidad": 0,
    },
    {
      "equipo": "Borussia Dortmund",
      "temporada": 2018,
      "precio": 2300,
      "stock": 14,
      "imagen": "assets/images/bvb2018.jpg",
      "oferta": true,
      "cantidad": 0,
    }
  ]

  constructor(private carro: CarroCamisetasService) {
  }

  ngOnInit(): void {
  }

  agregarAlCarro(camiseta): void{
    this.carro.agregarAlCarro(camiseta);
    camiseta.stock -= camiseta.cantidad;
    camiseta.cantidad = 0;
    console.log(camiseta.equipo);
  }

  maximoAlcanzado(m: string){
    alert(m);
  }
}
