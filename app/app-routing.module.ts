import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRoomComponent } from './search-room/search-room.component';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {path:'search', component: SearchRoomComponent},
  {path:'booking/:roomNo', component: BookingComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'room', component:RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SearchRoomComponent,BookingComponent,SignupComponent,LoginComponent,RoomComponent]
