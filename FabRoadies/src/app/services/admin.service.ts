//Author Anindita Sengupta

import { Injectable } from '@angular/core';
import { BusAdmin } from 'src/BusAdmin.model';
import { HttpClient } from '@angular/common/http';

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
  //[];
  //baseUrl : string = "http://localhost:8080"
  

  //constructor(private http : HttpClient) { }
  constructor() { }

  addAdminBus(addBus: BusAdmin) {
    //this.http.post(this.baseUrl+"/add-bus",addBus).subscribe(data => data = addBus);
    this.busList.push(addBus);
  }

  getAdminBusList(): BusAdmin[] {
    //async getAdminBusList(): BusAdmin[] {
    //return await this.http.get<BusAdmin[]>(this.baseUrl+"/busList").toPromise();
    return this.busList;
  }

  findByBusNo(busNo:number){
    return this.busList.find(x=>x.busNo==busNo);
  }

  deleteBus(index:number){
    return this.busList.splice(index,1);
  }
}
