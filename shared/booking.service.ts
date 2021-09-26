import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  selectedBooking: Booking = new Booking;
  bookings: Booking[] = [];
  readonly baseURL = 'http://localhost:3000/booking';
  getBookingList: any;

  constructor(private http : HttpClient) { }
  postBooking(book : Booking){
    return this.http.post(this.baseURL,book);
  }
}
