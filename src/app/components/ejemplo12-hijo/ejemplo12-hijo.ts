import { Component, Input, input } from '@angular/core';
import { NgClass } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-ejemplo12-hijo',
  imports: [],
  templateUrl: './ejemplo12-hijo.html',
  styleUrl: './ejemplo12-hijo.css',
})
export class Ejemplo12Hijo {
  // forma antigua
  // @Input() nombre = '';

  nombre = input.required();
  color = input('red');
}
