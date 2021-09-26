import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RoomService } from './room.service';

describe('RoomService', () => {
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[
      HttpClientModule,
      HttpClientTestingModule 
    ]});
    service = TestBed.inject(RoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
