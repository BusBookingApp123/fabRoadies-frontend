import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminBrowseComponent } from './admin-browse/admin-browse.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { NoBusesFoundComponent } from './no-buses-found/no-buses-found.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AdminBusListComponent } from './admin-bus-list/admin-bus-list.component';
import { BysourceComponent } from './AdminSearchComponent/bysource/bysource.component';
import { BydestinationComponent } from './AdminSearchComponent/bydestination/bydestination.component';
import { BydateComponent } from './AdminSearchComponent/bydate/bydate.component';
import { TicketBookingPageComponent } from './ticket-booking-page/ticket-booking-page.component';
import { ByBusNoComponent } from './AdminSearchBus/by-bus-no/by-bus-no.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    LoginComponent,
    SignupComponent,
    AdminBrowseComponent,
    AddBusComponent,
    NoBusesFoundComponent,
    BusListComponent,
    AdminBusListComponent,
    BysourceComponent,
    BydestinationComponent,
    BydateComponent,
    TicketBookingPageComponent,
    ByBusNoComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatButtonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
