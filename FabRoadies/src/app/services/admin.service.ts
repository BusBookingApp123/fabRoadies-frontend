import { Injectable } from '@angular/core';
import { BusAdmin } from 'src/BusAdmin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  busList : BusAdmin[]=[{
    "busNo":123,
    "source":"From Demo",
    "destination":"To Demo2",
    "agency":"Demo Agency",
    "busType":"Demo Type",
    "dateOfDep":"00/00/0000",
    "depTime":1234,
    "seatNo":43,
    "price":250
  }];

  constructor() { }

   addBus(admin : BusAdmin){
    this.busList.push(admin);
  }

  getAdminBusList() : BusAdmin[]{
    return this.busList;
  }
}
