//Author Sanchari 

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusAdmin } from 'src/BusAdmin.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  addBus : BusAdmin = new BusAdmin();

  constructor(private service:AdminService, private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    this.service.addBus(this.addBus);
    console.log("Saving...." + this.addBus.busNo);
  }

   //logout fn.
   logout(){
    this.router.navigate(['home']);
  }

}
