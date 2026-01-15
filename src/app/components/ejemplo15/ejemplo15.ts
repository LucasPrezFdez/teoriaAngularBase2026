import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo15',
  imports: [CommonModule],
  templateUrl: './ejemplo15.html',
  styleUrl: './ejemplo15.css',
})
export class Ejemplo15 {
  user = {
    name: 'Jose',
    isAdmin: false,
  };
}
