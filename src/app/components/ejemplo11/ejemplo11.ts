import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo11',
  imports: [],
  templateUrl: './ejemplo11.html',
  styleUrl: './ejemplo11.css',
})
export class Ejemplo11 {
  frase = 'Hola esto es <b>Angular</b> <script>alert("hacker")</script>';
}
