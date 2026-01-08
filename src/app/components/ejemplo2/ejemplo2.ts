import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  imports: [],
  templateUrl: './ejemplo2.html',
  styleUrl: './ejemplo2.css',
})
export class Ejemplo2 {
  count = 1;
  incrementar() {
    this.count++;
  }
}
