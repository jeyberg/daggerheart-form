import { Pipe, PipeTransform } from '@angular/core';
import { Feature } from '../../types';

@Pipe({
  name: 'feature'
})
export class FeaturePipe implements PipeTransform {

  transform(feature: Feature): string {
    const res = `<b>${feature.name}:</b> ${feature.description}`;

    return res;
  }

}
