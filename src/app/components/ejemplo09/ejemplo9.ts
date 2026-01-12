import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo9',
  imports: [FormsModule],
  templateUrl: './ejemplo9.html',
  styleUrl: './ejemplo9.css',
})
export class Ejemplo9 {
  email = '';
  password = '';
  handleLogin() {
    alert(`Te has logueado con ${this.email}`);
  }
}
