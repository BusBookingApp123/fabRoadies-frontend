import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  flag : boolean = false;


  constructor() { }

  ngOnInit(): void {}

  validate() {

    if(this.user.email =='fabroadies@gmail.com' && this.user.password == 'fabroadies')
      this.flag = true;
    else
      alert("Invalid EmailId or Password!!");
    console.log(this.user.email + ":" + this.user.password);
  }

}
