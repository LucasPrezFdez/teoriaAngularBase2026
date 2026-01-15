import { Component, inject } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplo14b',
  imports: [CommonModule],
  templateUrl: './ejemplo14b.html',
  styleUrl: './ejemplo14b.css',
})
export class Ejemplo14b {
  rickandomortyService = inject(RickandmortyService);

  personajes$ = this.rickandomortyService.getAll();
}
