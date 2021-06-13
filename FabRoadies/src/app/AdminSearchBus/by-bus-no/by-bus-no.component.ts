//Author Anindita Sengupta

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { BusAdmin } from 'src/BusAdmin.model';

@Component({
  selector: 'app-by-bus-no',
  templateUrl: './by-bus-no.component.html',
  styleUrls: ['./by-bus-no.component.css']
})
export class ByBusNoComponent implements OnInit {

  busNo:number=0;
  admin:BusAdmin=new BusAdmin();

  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  //search by bus number
  search(){
    this.admin=this.service.findByBusNo(this.busNo) as BusAdmin;
  }

  //logout fn
  logout(){
    this.router.navigate(['logout']);
  }

}
