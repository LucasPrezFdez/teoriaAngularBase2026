import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  imports: [],
  templateUrl: './ejemplo8.html',
  styleUrl: './ejemplo8.css',
})
export class Ejemplo8 {
  resultado = 0;
  sumar(numero1: number, numero2: number) {
    this.resultado = numero1 + numero2;
  }
}
