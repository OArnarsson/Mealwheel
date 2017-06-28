import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionActive'
})
export class OptionActivePipe implements PipeTransform {

  transform(value: number): string {
    if (value > 0) return value.toString();
    return '❌';
  }

}
