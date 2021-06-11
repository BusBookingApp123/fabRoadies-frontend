import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrowseComponent } from './admin-browse/admin-browse.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'',component:BrowseComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-browse',component:AdminBrowseComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
