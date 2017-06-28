import { Pipe, PipeTransform } from '@angular/core';
import {FoodOption} from "../models/foodOption";

@Pipe({
  name: 'valuePipe'
})
export class AvailablePipe implements PipeTransform {

  transform(options: FoodOption[]): FoodOption[] {
    return options.filter(option => option.value > 0);
  }

}
