import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPayment() {

    alert("Your data is submitted successfully");

  }

    //logout
    logout(){
      this.router.navigate(['home']);
    }

  }
