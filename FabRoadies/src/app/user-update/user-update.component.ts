import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user : User = new User();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onUpdate() {

    // console.log("Your data is submitted successfully" + this.user.name +":"+ this.user.phnNo +":"+ this.user.email +":"+ this.user.password);
    //this.service.addUser(this.user);
  
    alert("Your data is updated successfully");
    }

    //logout
    logout(){
      this.router.navigate(['home']);
    }
  
  }