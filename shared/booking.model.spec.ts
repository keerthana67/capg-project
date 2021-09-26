import { Booking } from './booking.model';

import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports:[
      HttpClientModule,
      HttpClientTestingModule 
    ]
  })
  .compileComponents();
});
describe('Booking', () => {
  it('should create an instance', () => {
    expect(new Booking()).toBeTruthy();
  });
});
