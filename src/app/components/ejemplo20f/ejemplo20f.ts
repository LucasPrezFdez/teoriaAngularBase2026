import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';

@Component({
  selector: 'app-ejemplo20f',
  imports: [NgForOf, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './ejemplo20f.html',
  styleUrl: './ejemplo20f.css',
})
export class Ejemplo20f {
  productos = ['Fresa', 'Limón', 'Plátano', 'Naranja'];
  search = new FormControl('');

  filtro$ = this.search.valueChanges.pipe(
    startWith(''),
    map((text) => text?.trim()),
    map((text) => text?.toLocaleLowerCase()),
    map((text) => this.productos.filter((p) => p.toLocaleLowerCase().includes(text || ''))),
    distinctUntilChanged(),
    debounceTime(500),
  );
}
