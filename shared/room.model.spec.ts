import { Room } from './room.model';
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
describe('Room', () => {
  it('should create an instance', () => {
    expect(new Room()).toBeTruthy();
  });
});
