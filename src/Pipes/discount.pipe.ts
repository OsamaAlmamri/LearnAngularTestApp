import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  pure:false
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, amount: number=0): number {
    if(amount!=undefined &&  amount>0)
      return value-(value*amount/100)

    else

      return value;


  }

}
