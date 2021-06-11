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

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  validate() {
    if(this.user.email=='admin@email.com'&&this.user.password=='admin123'){
      this.router.navigate(['admin']);
    }
    console.log(this.user.email+":"+this.user.password);
  }

}
