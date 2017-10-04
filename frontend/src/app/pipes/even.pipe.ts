import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class EvenPipe implements PipeTransform {

  transform(value: any, limit: number): any {
    return value.slice(0, limit);
  }

}
