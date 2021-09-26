import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { SearchRoomComponent } from './search-room.component';

describe('SearchRoomComponent', () => {
  let component: SearchRoomComponent;
  let fixture: ComponentFixture<SearchRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule 
      ],
      declarations: [ SearchRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
