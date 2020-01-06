import { Pipe, PipeTransform } from '@angular/core';
import { ProjectData } from '../interfaces/project-data';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(data: ProjectData[], arg: string, key: string): ProjectData[] {
    
  //   if( arg == '' || arg.length < 2) return data;
  //   arg = arg.toLowerCase();

  //   return data.filter( item => {
  //     return item[key].toLowerCase().include(arg)
  //   });
  // }


  transform(data: ProjectData[], arg: string): ProjectData[] {
    
    if( arg == '' || arg.length < 2) return data;
    let resultProject = [];
    for (let element of data) {
      if (element.acronym.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        // console.log('>>>', '-- pipe');
        resultProject.push(element);
      }
    }
    return resultProject;
  }

}
