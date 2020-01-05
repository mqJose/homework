import { Component, OnInit, Inject } from '@angular/core';
import { DeveloperModalComponent } from './developer-modal/developer-modal.component';
import { MatDialog} from '@angular/material/dialog';
import { DeveloperData } from '../../interfaces/developer-data';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  private developerData: DeveloperData = {
    id: 1,
    name: 'Jose David',
    fullName: 'Jose David Mamani Quispe',
    team: 'Core',
    birthDate: '1980-12-13',
    nickName: 'Ruso',
    occupation: 'Software Developer'
  }
  public data: DeveloperData;

  constructor(public dialog: MatDialog) { 
    this.data = this.developerData;
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeveloperModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

}
