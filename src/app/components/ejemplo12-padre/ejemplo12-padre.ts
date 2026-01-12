import { Component } from '@angular/core';
import { Ejemplo12Hijo } from '../ejemplo12-hijo/ejemplo12-hijo';

@Component({
  selector: 'app-ejemplo12-padre',
  standalone: true,
  imports: [Ejemplo12Hijo],
  templateUrl: './ejemplo12-padre.html',
  styleUrl: './ejemplo12-padre.css',
})
export class Ejemplo12Padre {}
