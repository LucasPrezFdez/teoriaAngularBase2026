import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-ejemplo20a',
  imports: [CommonModule],
  templateUrl: './ejemplo20a.html',
  styleUrl: './ejemplo20a.css',
})
export class Ejemplo20a implements OnInit {
  mensaje$ = of('Hola mundo desde RxJS');
  //mensaje = '';
  ngOnInit(): void {
    //this.mensaje$.subscribe((valor) => (this.mensaje = valor));
  }
}
