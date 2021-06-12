import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';
import{HttpClientModule} from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AdminBrowseComponent } from './admin-browse/admin-browse.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AdminBusListComponent } from './admin-bus-list/admin-bus-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    LoginComponent,
    SignupComponent,
    AdminBrowseComponent,
    AddBusComponent,
    BusListComponent,
    AdminBusListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
