import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrowseComponent } from './admin-browse/admin-browse.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NoBusesFoundComponent } from './no-buses-found/no-buses-found.component';

const routes: Routes = [
  {path:'',component:BrowseComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-browse',component:AdminBrowseComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
  {path :'no-bus', component:NoBusesFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
