import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-ejemplo20d',
  imports: [CommonModule],
  templateUrl: './ejemplo20d.html',
  styleUrl: './ejemplo20d.css',
})
export class Ejemplo20d {
  datos$ = from([1, 2, 3, 4, 5, 6]).pipe(
    filter((numero) => numero % 2 === 0),
    toArray(),
  );
}
