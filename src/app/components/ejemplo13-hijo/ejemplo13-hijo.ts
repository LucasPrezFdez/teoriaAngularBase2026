import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-hijo',
  imports: [],
  templateUrl: './ejemplo13-hijo.html',
  styleUrl: './ejemplo13-hijo.css',
})
export class Ejemplo13Hijo {
  // antiguo
  // @Output() pedirDinero = new EventEmitter();

  pedirDinero = output<Number>();

  pedirDineroAPapa(cantidad: Number) {
    this.pedirDinero.emit(cantidad);
  }
}
