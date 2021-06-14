//Author Anindita Sengupta

import { Injectable } from '@angular/core';
import { BusAdmin } from 'src/BusAdmin.model';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

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
    //return await this.http.get<BusAdmin[]>(this.baseUrl+"/busList").pipe(delay(100)).toPromise();
    return this.busList;
  }

  findByBusNo(busNo:number){
    //return this.http.get<Flight>(this.baseUrl+"/flight/"+code);
    return this.busList.find(x=>x.busNo==busNo);
  }

  deleteBus(busNo:number){
    //deleteBus(code : number){
      //this.http.delete(this.baseUrl + "/del/" +code).subscribe();
    return this.busList.splice(busNo,1);
  }

  updateBus(addBus : BusAdmin){
    //this.http.put(this.baseUrl+"/edit", addBus).subscribe();
  }
}
