import { Component, OnInit } from '@angular/core';
import { BusAdmin } from 'src/BusAdmin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  addBus : BusAdmin = new BusAdmin();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log("Saving...." + this.addBus.busNo);
  }

   //logout fn.
   logout(){
    this.router.navigate(['home']);
  }

}
