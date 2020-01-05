import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(inputDate: string): string {
    let years = moment().diff(inputDate, 'years');
    return '+'+years+' years old';
  }

}
