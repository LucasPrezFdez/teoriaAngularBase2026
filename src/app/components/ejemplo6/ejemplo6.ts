import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo6',
  imports: [FormsModule],
  templateUrl: './ejemplo6.html',
  styleUrl: './ejemplo6.css',
})
export class Ejemplo6 {
  url =
    'https://static-cdn.jtvnw.net/jtv_user_pictures/793aa1d4-21f8-43eb-9fe7-17e5f5a3ede9-profile_image-70x70.png';
  width = 200;
}
