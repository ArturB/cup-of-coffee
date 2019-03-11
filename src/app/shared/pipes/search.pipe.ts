import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false

})
export class SearchPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(items: any, filter: any): any {
    if (filter && Array.isArray(items)) {
        let filterKeys = Object.keys(filter);
        return items.filter(item =>
            filterKeys.reduce((memo, keyName) =>
                (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
    } else {
        return items;
    }
  }

}
