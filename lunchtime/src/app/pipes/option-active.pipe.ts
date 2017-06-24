import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionActive'
})
export class OptionActivePipe implements PipeTransform {

  transform(value: boolean): string {
    if (value) return '✔';
    return '❌';
  }

}
