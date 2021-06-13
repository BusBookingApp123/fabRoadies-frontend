import { Injectable } from '@angular/core';
import { BusAdmin } from 'src/BusAdmin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  busList: BusAdmin[] = [{
    "busNo": 124,
    "source": "From Demo",
    "destination": "To Demo2",
    "agency": "Demo Agency",
    "busType": "Demo Type",
    "dateOfDep": "00/00/0000",
    "depTime": 1234,
    "noOfseats": 43,
    "price": 250
  }];

  constructor() { }

  addAdminBus(addBus: BusAdmin) {
    this.busList.push(addBus);
  }

  getAdminBusList(): BusAdmin[] {
    return this.busList;
  }
}
