import { Routes } from '@angular/router';
import { Ejemplo0 } from './components/ejemplo0/ejemplo0';
import { Ejemplo1 } from './components/ejemplo1/ejemplo1';
import { Ejemplo2 } from './components/ejemplo2/ejemplo2';
import { Ejemplo3 } from './components/ejemplo3/ejemplo3';
import { Ejemplo3b } from './components/ejemplo3b/ejemplo3b';

export const routes: Routes = [
  { path: 'ej0', component: Ejemplo0 },
  { path: 'ej1', component: Ejemplo1 },
  { path: 'ej2', component: Ejemplo2 },
  { path: 'ej3', component: Ejemplo3 },
  { path: 'ej3b', component: Ejemplo3b },
];
