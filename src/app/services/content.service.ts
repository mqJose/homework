import { Injectable } from '@angular/core';
import { ProjectData } from '../interfaces/project-data';
import * as _ from 'lodash';

@Injectable()
export class ContentService {
  
  private ELEMENT_DATA: ProjectData[] = [
    { 
      id: 1,
      name: 'Modulo del Sistema Penal Para Adolescentes', 
      whereIsImplemented: 'Bolivia', 
      acronym: 'MOSPA', 
      image: '../../../assets/images/logos/_mospa_.png',
      status: 'Working',
      statusBool: false
    }, {
      id: 2,
      name: 'Facing together the challenge of poverty',
      whereIsImplemented: 'Libano',
      acronym: 'TAHADDI',
      image: '../../../assets/images/logos/_tahaddi_.png',
      status: 'Working',
      statusBool: false
    }, {
      id: 3,
      name: 'Sistema de Informaciones para Gestion Adolescentes de Honduras',
      whereIsImplemented: 'Honduras',
      acronym: 'SIGAH',
      image: '../../../assets/images/logos/_sigah_.png',
      status: 'Working',
      statusBool: false
    }, {
      id: 4,
      name: 'Sistema Penitenciario de Bolivia',
      whereIsImplemented: 'Bolivia',
      acronym: 'SIPENBOL',
      image: '../../../assets/images/logos/_sipenbol_.png',
      status: 'Finished',
      statusBool: true
    }
  ];
  constructor() { }

  /**
   * getProjects
   */
  public getProjects(): ProjectData[] {
    return this.ELEMENT_DATA;
  }

  /**
   * filter
   */
  public filter( id: number ): ProjectData[] {
    return _.filter(this.ELEMENT_DATA, {id: id});
  }
  
  /**
   * filterName
   */
  public filterName(name: string): ProjectData[] {
    return _.filter(this.ELEMENT_DATA, { name: name });
  }

}
