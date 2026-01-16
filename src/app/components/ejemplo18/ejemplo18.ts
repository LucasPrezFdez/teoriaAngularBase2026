import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ejemplo18',
  imports: [],
  templateUrl: './ejemplo18.html',
  styleUrl: './ejemplo18.css',
})
export class Ejemplo18 implements OnInit {
  titulo = '';
  especialidad = '';

  activeRoute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params) => {
      this.titulo = params['titulo'] || '';
      this.especialidad = params['especialidad'] || '';
    });

    // this.titulo = this.activeRoute.snapshot.queryParams['titulo'];
    // this.especialidad = this.activeRoute.snapshot.queryParams['especialidad'];
  }

  cambiarParametros() {
    this.router.navigate([], {
      queryParams: { titulo: 'React', especialidad: 'Programacion' },
    });
  }
}
