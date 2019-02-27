import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform<T extends object>(elements: T[], filter: T): Array<T> {
    return null;
  }

}
