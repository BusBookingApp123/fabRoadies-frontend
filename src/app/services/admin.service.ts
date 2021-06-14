//Author Anindita Sengupta

import { Injectable } from '@angular/core';
import { BusAdmin } from 'src/BusAdmin.model';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { User } from 'src/user.model';
import { Role } from 'src/role.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  bus:BusAdmin[]=[];
  baseUrl : string = "http://localhost:8080";
  

  constructor(private http : HttpClient) { }


  addAdminBus(addBus: BusAdmin) {
    this.http.post(this.baseUrl+"/admin/addBus",addBus).subscribe(data => data = addBus);
  }

  loginUser(email : string,password: string){
    return this.http.get<Role>(this.baseUrl+"/login/"+email+"/"+password);
  }


    async getAdminBusList() {

   return await this.http.get<BusAdmin[]>(this.baseUrl+"/admin/showAllBuses").toPromise();
  }

  deleteBus(busno:string){
  
    this.http.delete(this.baseUrl + "/admin/deleteBus/" +busno).subscribe();


     }

  findByBusNo(busno:string){
 
    return this.http.get<BusAdmin>(this.baseUrl+"/get/bus/"+busno);
   // return this.busList.find(x=>x.busno==busno);
  }

 

  updateBus(addBus : BusAdmin){
    this.http.put(this.baseUrl+"/bus/edit", addBus).subscribe();
  }
  addUser(user:User)
  {
    this.http.post(this.baseUrl+"/add/2",user).subscribe();
  }
}
