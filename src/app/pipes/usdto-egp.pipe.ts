import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP'
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value: number, exchRate: number = 10): number {
    return value * exchRate;
  }

}
