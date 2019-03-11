import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../../core/models/article.model';

@Pipe({
  name: 'sortTitle',
  // pure: false
})
export class SortTitlePipe implements PipeTransform {

  transform(value: Array<Article>, args?: any): Array<Article> {
    return value.sort((a,b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return -1
      }
    });
  }

}
