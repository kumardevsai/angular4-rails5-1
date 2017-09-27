import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class EvenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => item.id % 3 === 0);
  }

}
