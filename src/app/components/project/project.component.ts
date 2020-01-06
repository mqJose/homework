import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ProjectData } from 'src/app/interfaces/project-data';
import { Observable, } from 'rxjs';
// import { map } from 'rxjs/operators';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public data: ProjectData [];
  public filterProject: string = '';

  constructor(private _contentService: ContentService) { 
    this.data = this._contentService.getProjects();
  }

  ngOnInit() {

  }

  // getProjectsById (id: number): Observable<ProjectData> {
  //   return of(this._contentService.filterById(id))
  //     // .map(epics => epics.filter(epic => epic.id === id)[0]);
  // }

}
