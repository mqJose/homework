import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatTabsModule,
    MatCardModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatDialogModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatDialogModule,
    MatTableModule,
    MatInputModule
  ]
})
export class AppMaterialModule { }
