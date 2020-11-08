import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camiseta } from '../lista-camisetas/Camiseta';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>(); 

  @Output()
  maximoAlcanzado: EventEmitter<string> = new EventEmitter<string>(); 

  ngOnInit(): void {
  }

  bajarCantidad(): void {
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  subirCantidad(): void {
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else
      this.maximoAlcanzado.emit("Se alcanzo el max");
  }
  
  changeQuantity(event): void {
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
  }
  
}
