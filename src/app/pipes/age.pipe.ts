import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  /**
  * Represent a filter for DataProject
  * @param (string) argumment of Input Date
  * @returns (string) age concated with a string
  */
  transform(inputDate: string): string {
    return '+' + (moment().diff(inputDate, 'years'))+' years old';
  }

}
