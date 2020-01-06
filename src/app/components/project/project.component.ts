import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ProjectData } from 'src/app/interfaces/project-data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public data: ProjectData [];
  public filterProject: string = '';

  /**
  * Represent a filter for DataProject
  * @constructor
  * @param (ContentService) argumment for Service
  * @returns (void)
  */
  constructor(private _contentService: ContentService) { 
    this.data = this._contentService.getProjects();
  }

  ngOnInit() {

  }
}
