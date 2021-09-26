import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatTableModule
]

@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
