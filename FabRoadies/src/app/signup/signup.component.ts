import { Component, OnInit } from '@angular/core';
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
    /**if(this.user.email=='admin@email.com'&&this.user.password=='admin123')
      this.router.navigate(['admin']);
    else if(this.user.email=='fabroadies@gmail.com' && this.user.password == 'fabroadies')
      this.flag = true;
    else
      alert("Invalid user id");**/
    console.log("Your data is submitted successfully" + this.user.name +":"+ this.user.phnNo +":"+ this.user.email +":"+ this.user.password);
  }

}
