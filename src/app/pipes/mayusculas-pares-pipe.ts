import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculasPares',
})
export class MayusculasParesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let letras = value.split('');
    let arrayDeLetras = letras.map((letra, index) =>
      index % 2 === 0 ? letra.toUpperCase() : letra.toLocaleLowerCase()
    );
    return arrayDeLetras.join('');
  }
}
