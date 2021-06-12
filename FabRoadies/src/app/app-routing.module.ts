import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrowseComponent } from './admin-browse/admin-browse.component';
import { AdminBusListComponent } from './admin-bus-list/admin-bus-list.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'',component:BrowseComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin-browse',component:AdminBrowseComponent},
  {path:'admin_bus-list',component:AdminBusListComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
