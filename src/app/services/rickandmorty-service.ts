import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Character } from '../models/Character';

interface Characters {
  results: Character[];
}

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  // antigua
  // constructor(private httpClient: HttpClient) {}
  httpClient = inject(HttpClient);

  getAll() {
    const URL = 'https://rickandmortyapi.com/api/character';

    return this.httpClient.get<Characters>(URL);
  }
}
