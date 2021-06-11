import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User = new User;
  flag : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
      alert("Your data is submitted successfully");
    console.log("Your data is submitted successfully" + this.user.name +":"+ this.user.phnNo +":"+ this.user.email +":"+ this.user.password);
  }

}
