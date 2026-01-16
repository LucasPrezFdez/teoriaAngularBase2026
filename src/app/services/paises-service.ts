import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  httpClient = inject(HttpClient);

  getAll() {
    const URL = 'https://restcountries.com/v3.1/all?fields=name,flags';
    this.httpClient.get(URL);
  }
}
