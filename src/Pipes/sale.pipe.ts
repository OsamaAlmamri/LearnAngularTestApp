import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale'
})
export class SalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
