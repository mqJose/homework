import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ProjectData } from 'src/app/interfaces/project-data';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'whereIsImplemented', 'acronym', 'image', 'status'];   
  public data: ProjectData [];
  // public data: any;
  constructor(private _contentService: ContentService) { 
    
    this.data = this._contentService.getProjects();
    console.log('>>>', this.data);
    console.log('>>>', this.displayedColumns);
  }

  ngOnInit() {
  }

}
