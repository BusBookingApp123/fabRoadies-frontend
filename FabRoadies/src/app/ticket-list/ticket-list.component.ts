import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/Ticket.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tList:Ticket[]=[];

  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    // this.service.getAdminBusList().then(data => this.tList = data);
  }

//   remove(ticketId:string){
//     var ans = confirm("Are you sure to delete?");
//     if(ans){
//     this.service.deleteBus(ticketId);
//     this.tList = this.tList.filter(tList => tList.ticketId != ticketId);
//   }
// }

  //logout
  logout(){
    this.router.navigate(['user-home']);
  }

}
