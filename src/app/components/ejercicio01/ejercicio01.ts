import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  imports: [],
  templateUrl: './ejercicio01.html',
  styleUrl: './ejercicio01.css',
})
export class Ejercicio01 {
  numerosAleatorios: number[] = [
    187, 42, 153, 6, 198, 77, 121, 34, 165, 59, 10, 92, 141, 3, 118, 84, 200, 27, 136, 49,
  ];
  isOdd(number: number) {
    return number % 2 !== 0;
  }
  isMoreThan100(number: number) {
    return number > 100;
  }
}
