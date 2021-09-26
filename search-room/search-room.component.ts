import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


import { RoomService } from '../shared/room.service'
import {Room} from '../shared/room.model'

interface Room1 {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css'],
  providers:[RoomService]
})
export class SearchRoomComponent implements OnInit {

  //minDate: Date;
  //maxDate: Date;
  //displayedColumns = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  //roomNo:string='';
  roomType:String='';
  //price:String='';
  status:String='Available';
  constructor(public roomService: RoomService,private router: Router) { 
  }

  ngOnInit(): void {
    //this.refershRoomList()
    
  }

  //selectedValue!: string;
  displayedColumns: string[] = ['roomNo', 'roomType', 'price'];
  

  rooms: Room1[] = [
    {value: 'Single Bed', viewValue: 'Single Bed'},
    {value: 'Double Bed', viewValue: 'Double Bed'},
    {value: 'Delux', viewValue: 'Delux'}
  ];

 onSubmit(form : NgForm){
   this.roomService.getRoom(this.roomType,this.status)
  }
  
  refershRoomList(){
    this.roomService.getRoom(this.roomType,this.status).subscribe((res) => {
      this.roomService.rooms = res as Room[];
    });
  }
  onSelect(room:any){
    this.router.navigate(['/booking',room.roomNo])
  }
}


/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/
