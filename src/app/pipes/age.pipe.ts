import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(inputDate: string): string {
    console.log('>>>', inputDate);
    let years = moment().diff(inputDate, 'years');
    console.log('... ', years);
    return '+'+years+' years old';
  }

}
