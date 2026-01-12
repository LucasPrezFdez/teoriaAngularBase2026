import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MayusculasParesPipe } from '../../pipes/mayusculas-pares-pipe';

@Component({
  selector: 'app-ejemplo10',
  imports: [DatePipe, UpperCasePipe, MayusculasParesPipe],
  templateUrl: './ejemplo10.html',
  styleUrl: './ejemplo10.css',
})
export class Ejemplo10 {
  hoy = new Date();
  nombre = 'Lucas';
}
