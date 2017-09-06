import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleSorting'
})
export class VehicleSortingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
