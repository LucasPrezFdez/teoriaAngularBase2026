import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio02',
  imports: [FormsModule],
  templateUrl: './ejercicio02.html',
  styleUrl: './ejercicio02.css',
})
export class Ejercicio02 {
  altura = '';
  peso = '';
}
