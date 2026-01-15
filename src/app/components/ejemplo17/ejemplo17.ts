import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejemplo17',
  imports: [],
  templateUrl: './ejemplo17.html',
  styleUrl: './ejemplo17.css',
})
export class Ejemplo17 implements OnInit {
  id = '';
  activeRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
  }
}
