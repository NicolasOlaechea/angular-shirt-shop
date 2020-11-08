import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Camiseta } from './lista-camisetas/Camiseta';

@Injectable({
  providedIn: 'root'
})
export class CarroCamisetasService {

  private _listaDelCarro: Camiseta[] = [];
  listaDelCarro: BehaviorSubject<Camiseta[]> = new BehaviorSubject([]);

  constructor() { }

  agregarAlCarro(camiseta: Camiseta) {
    let item: Camiseta =  this._listaDelCarro.find((v1) => v1.equipo == camiseta.equipo);
    if(!item){
      this._listaDelCarro.push({ ... camiseta});
    } else{
      item.cantidad += camiseta.cantidad;
    }
    this.listaDelCarro.next(this._listaDelCarro);
  }

}
