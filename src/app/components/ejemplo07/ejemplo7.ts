import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo7',
  imports: [CommonModule],
  templateUrl: './ejemplo7.html',
  styleUrl: './ejemplo7.css',
})
export class Ejemplo7 {
  theme = 'pastel';
}
