import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo4b',
  imports: [],
  templateUrl: './ejemplo4b.html',
  styleUrl: './ejemplo4b.css',
})
export class Ejemplo4b {
  numero = 0;

  incrementar() {
    this.numero++;
  }
  deCrementar() {
    this.numero--;
  }

  isEven() {
    return this.numero % 2 === 0;
  }
}
