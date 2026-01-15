import { Routes } from '@angular/router';
import { Ejemplo0 } from './components/ejemplo0/ejemplo0';
import { Ejemplo1 } from './components/ejemplo01/ejemplo1';
import { Ejemplo2 } from './components/ejemplo02/ejemplo2';
import { Ejemplo3 } from './components/ejemplo03/ejemplo3';
import { Ejemplo3b } from './components/ejemplo03b/ejemplo3b';
import { Ejemplo4 } from './components/ejemplo04/ejemplo4';
import { Ejemplo4b } from './components/ejemplo04b/ejemplo4b';
import { Ejemplo5 } from './components/ejemplo05/ejemplo5';
import { Ejemplo6 } from './components/ejemplo06/ejemplo6';
import { Ejemplo7 } from './components/ejemplo07/ejemplo7';
import { Ejemplo8 } from './components/ejemplo08/ejemplo8';
import { Ejemplo9 } from './components/ejemplo09/ejemplo9';
import { Ejemplo10 } from './components/ejemplo10/ejemplo10';
import { Ejemplo11 } from './components/ejemplo11/ejemplo11';
import { Ejemplo12Padre } from './components/ejemplo12-padre/ejemplo12-padre';
import { Ejemplo13Padre } from './components/ejemplo13-padre/ejemplo13-padre';
import { Ejemplo14 } from './components/ejemplo14/ejemplo14';
import { Ejemplo14b } from './components/ejemplo14b/ejemplo14b';
import { Ejemplo15 } from './components/ejemplo15/ejemplo15';
import { Ejercicio01 } from './components/ejercicio01/ejercicio01';
import { Ejemplo16 } from './components/ejemplo16/ejemplo16';
import { Ejemplo17 } from './components/ejemplo17/ejemplo17';
import { Ejemplo18 } from './components/ejemplo18/ejemplo18';
import { Ejercicio02 } from './components/ejercicio02/ejercicio02';

export const routes: Routes = [
  { path: 'ej0', component: Ejemplo0 },
  { path: 'ej1', component: Ejemplo1 },
  { path: 'ej2', component: Ejemplo2 },
  { path: 'ej3', component: Ejemplo3 },
  { path: 'ej3b', component: Ejemplo3b },
  { path: 'ej4', component: Ejemplo4 },
  { path: 'ej4b', component: Ejemplo4b },
  { path: 'ej5', component: Ejemplo5 },
  { path: 'ej6', component: Ejemplo6 },
  { path: 'ej7', component: Ejemplo7 },
  { path: 'ej8', component: Ejemplo8 },
  { path: 'ej9', component: Ejemplo9 },
  { path: 'ej10', component: Ejemplo10 },
  { path: 'ej11', component: Ejemplo11 },
  { path: 'ej12', component: Ejemplo12Padre },

  { path: 'ej13', component: Ejemplo13Padre },
  { path: 'ej14', component: Ejemplo14, runGuardsAndResolvers: 'always' },
  { path: 'ej14b', component: Ejemplo14b },
  { path: 'ej15', component: Ejemplo15 },
  { path: 'ej16', component: Ejemplo16 },
  { path: 'ej17', component: Ejemplo17 },
  { path: 'ej17/:id', component: Ejemplo17 },
  { path: 'ej18', component: Ejemplo18 },

  { path: 'ex1', component: Ejercicio01 },
  { path: 'ex2', component: Ejercicio02 },
];
