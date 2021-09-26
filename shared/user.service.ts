import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = new User;
  users: User[] = [];
  readonly baseURL = 'http://localhost:3001';

  constructor(private http : HttpClient) { }

  postSignup(user : User){
    return this.http.post(this.baseURL+'/signup',user);
  }

  postLogin(user : User){
    return this.http.post(this.baseURL+'/login',user);
  }
}
