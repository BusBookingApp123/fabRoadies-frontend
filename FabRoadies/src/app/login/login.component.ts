//Author Sanchari Saha

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { Role } from 'src/role.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: Role = new Role();
  user: User = new User();
  flag : boolean = false;

  constructor(private service : AdminService,private router:Router) { }

  ngOnInit(): void {}

  //validation function
  
  validate() {
   /* this.service.loginUser(this.user.email,this.user.password).subscribe(data => this.role = data);
    // alert(this.role.roleId);
    if(this.role.roleId===1)
      this.router.navigate(['admin-browse']);
    else if(this.role.roleId===2)
      this.flag = true;
    else
      alert("Invalid user id");*/

    if(this.user.email=='admin@gmail.com'&&this.user.password=='admin123')
       this.router.navigate(['admin-browse']);
     else if(this.user.email=='fabroadies@gmail.com' && this.user.password == 'fabroadies')
       //this.flag = true;
       this.router.navigate(['user-home']);
     else
       alert("Invalid user id");
    // console.log(this.user.email+":"+this.user.password);
  }

}
