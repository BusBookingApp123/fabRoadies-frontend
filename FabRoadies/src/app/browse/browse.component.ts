import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public name:string='';
  public email:string='';
  public phnNo:number=0;
  public feedBack:string='';

  constructor() { }

  ngOnInit(): void {
  }

  feedback(){
    if(this.name&&this.email&&this.feedBack!=null){
      alert('Thanks for the Feedback!')
    }
    console.log(this.name+"has "+this.email+"and "+this.phnNo);
    console.log(this.feedBack);
  }

}
