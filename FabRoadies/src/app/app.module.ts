import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminBrowseComponent } from './admin-browse/admin-browse.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { NoBusesFoundComponent } from './no-buses-found/no-buses-found.component';



@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    LoginComponent,
    SignupComponent,
    AdminBrowseComponent,
    AddBusComponent,
    NoBusesFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
