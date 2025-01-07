import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'new'
})
export class NewPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let valArr=value.split(/[aeiou]/)
    return valArr.join('')
  }

}
