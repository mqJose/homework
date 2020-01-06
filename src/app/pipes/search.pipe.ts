import { Pipe, PipeTransform } from '@angular/core';
import { ProjectData } from '../interfaces/project-data';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  /**
  * Represent a filter for DataProject
  * @param (ProjectData [])  - Data 
  * @param (string) argumment of Input
  * @returns (ProjectData[])
  */
  transform(data: ProjectData[], arg: string): ProjectData[] {
    
    if( arg == '' || arg.length < 2) return data;
    let resultProject = [];
    for (let item of data) {
      if (item.acronym.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultProject.push(item);
      }
    }
    return resultProject;
  }

}
