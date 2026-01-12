import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  imports: [CommonModule],
  templateUrl: './ejemplo4.html',
  styleUrl: './ejemplo4.css',
})
export class Ejemplo4 {
  numero = 0;

  incrementar() {
    this.numero++;
  }
  deCrementar() {
    this.numero--;
  }

  isOdd() {
    return this.numero % 2 !== 0;
  }
}
