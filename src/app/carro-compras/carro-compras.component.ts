import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroCamisetasService } from '../carro-camisetas.service';
import { Camiseta } from '../lista-camisetas/Camiseta';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.scss']
})
export class CarroComprasComponent implements OnInit {

  listaDelCarro$: Observable<Camiseta[]>;

  constructor(private carro: CarroCamisetasService) {
    this.listaDelCarro$ = carro.listaDelCarro.asObservable();
  }

  ngOnInit(): void {
  }

}
