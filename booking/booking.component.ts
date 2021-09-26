import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BookingService } from '../shared/booking.service';


declare var M:any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookingService]
})
export class BookingComponent implements OnInit {

  public rno:any;
  constructor(public bookingService: BookingService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm();
    let roomNo = this.route.snapshot.paramMap.get('roomNo');
    this.rno=roomNo


  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.bookingService.selectedBooking = {
      _id:"",
      roomNo:"rno",
      name:"",
      children:"",
      adult:"",
      checkin:"",
      checkout:"",
      days:""
    }
  }

  onSubmit(form : NgForm){
    this.bookingService.postBooking(form.value).subscribe((res)=>{
      this.resetForm(form);
      alert("booking Successfull");
      M.toast({html:'Booked Successfully', classes:'rounded'});
    })
  }

}
