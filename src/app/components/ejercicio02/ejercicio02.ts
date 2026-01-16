import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio02',
  imports: [FormsModule],
  templateUrl: './ejercicio02.html',
  styleUrl: './ejercicio02.css',
})
export class Ejercicio02 {
  altura = 0;
  peso = 0;
  imc = 0;

  handleSubmit() {
    this.imc = this.peso / (this.altura * this.altura);
  }
}
