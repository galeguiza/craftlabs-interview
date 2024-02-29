import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './landing.models';

@Pipe({
  name: 'prodVal',
  standalone: true
})
export class LandingsPipesPipe implements PipeTransform {

  transform(propertyName: string, obj: Product): unknown {
    return (obj as any)[propertyName];
  }

}
