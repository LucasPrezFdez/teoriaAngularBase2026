import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo5',
  imports: [FormsModule],
  templateUrl: './ejemplo5.html',
  styleUrl: './ejemplo5.css',
})
export class Ejemplo5 {
  numero = 0;

  //no va xd
  /* constructor() {
    setInterval(() => this.numero++, 2000);
  } */
}
