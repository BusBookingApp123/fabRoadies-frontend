//Author Anindita Sengupta

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public feedBack:string='';

  user:User=new User();

  constructor() { }

  ngOnInit(): void {
  }

  //feedback data
  feedback(){
    alert('Thanks for the feedback!');
    console.log(this.user.name+" has "+this.user.email+" and "+this.user.phoneNumber);
    console.log("FeedBack:" +this.feedBack);
   }

}
