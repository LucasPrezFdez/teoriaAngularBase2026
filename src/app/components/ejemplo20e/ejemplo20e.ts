import { V } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-ejemplo20e',
  imports: [CommonModule],
  templateUrl: './ejemplo20e.html',
  styleUrl: './ejemplo20e.css',
})
export class Ejemplo20e {
  resultado$ = of(5).pipe(
    tap((v) => console.log('Antes: ', v)),
    map((v) => v * 2),
    tap((v) => console.log('Despues: ', v)),
  );
}
