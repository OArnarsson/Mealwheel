import { Pipe, PipeTransform } from '@angular/core';
import {FoodOption} from "../models/foodOption";

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(options: FoodOption[]): FoodOption[] {
    return options.filter(option => option.active === true);
  }

}
