import { Component, inject, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty-service';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-ejemplo14',
  imports: [CommonModule],
  templateUrl: './ejemplo14.html',
  styleUrl: './ejemplo14.css',
})
export class Ejemplo14 implements OnInit {
  personajes: Character[] = [];

  // forma antigua
  /* constructor(private rickandmortyService: RickandmortyService) {
    // acceder al api y leer todos los personajes
    console.log(
      rickandmortyService.getAll().subscribe((characters) => {
        console.log(characters);
        this.personajes = characters.results as Character[];
      })
    );
  } */

  rickandmortyService = inject(RickandmortyService);
  ngOnInit() {
    this.rickandmortyService.getAll().subscribe((characters) => {
      console.log(characters);
      this.personajes = characters.results as Character[];
    });
  }
}
