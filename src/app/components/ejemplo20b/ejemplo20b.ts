import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, of, startWith } from 'rxjs';

@Component({
  selector: 'app-ejemplo20b',
  imports: [CommonModule],
  templateUrl: './ejemplo20b.html',
  styleUrl: './ejemplo20b.css',
})
export class Ejemplo20b {
  status$ = of('Datos listos').pipe(delay(2000), startWith('Cargando...'));
}
