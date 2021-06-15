import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrowseComponent } from './admin-browse/admin-browse.component';
import { AdminBusListComponent } from './admin-bus-list/admin-bus-list.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NoBusesFoundComponent } from './no-buses-found/no-buses-found.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ByBusNoComponent } from './AdminSearchBus/by-bus-no/by-bus-no.component';
import { UpdateComponent } from './update/update.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path:'',component:BrowseComponent},
  {path:'home',component:BrowseComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin-browse',component:AdminBrowseComponent},
  {path:'add-bus',component:AddBusComponent},
  {path:'admin_bus-list',component:AdminBusListComponent},
  {path:'search',component:ByBusNoComponent},
  {path:'update',component:UpdateComponent},
  {path:'user-update',component:UserUpdateComponent},
  {path:'user-home',component:UserHomeComponent},
  {path :'no-bus', component:NoBusesFoundComponent},
  {path:'ticket-list',component:TicketListComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
