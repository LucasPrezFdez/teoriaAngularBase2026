import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3b',
  imports: [CommonModule],
  templateUrl: './ejemplo3b.html',
  styleUrl: './ejemplo3b.css',
})
export class Ejemplo3b {
  profes = ['Antonio', 'Pepe', 'Isabel', 'Angel'];

  productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 25 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Cinturon', precio: 15 },
  ];

  usuario = {
    nombre: 'Juan',
    apellidos: 'Perez Garcia',
    edad: 30,
  };
}
