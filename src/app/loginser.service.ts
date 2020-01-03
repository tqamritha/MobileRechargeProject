import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserService {

  constructor(public p:HttpClient) 
  {
   }

   newlogin(m)
   {
     
     return this.p.post("http://localhost:8081/MobileRecharge/loginservlet",m);
   }

   adminData(x)
   {
    alert("add data successfuly");
    return this.p.post("http://localhost:8081/MobileRecharge/AdminServlet",x);
   }

   viewData()
   {
     return this.p.get("http://localhost:8081/MobileRecharge/ViewServlet");
   }

   editdata(x)
   {
     return this.p.post("http://localhost:8081/MobileRecharge/Editservlet",x);
   }
   
   deletedata(x)
   {
     return this.p.post("http://localhost:8081/MobileRecharge/DeleteServlet",x);
   }

   viewuser()
   {
      return this.p.get("http://localhost:8081/MobileRecharge/ViewUserServlet");
   }

   rechargenow(y)
   {
     return this.p.post("http://localhost:8081/MobileRecharge/RechargeServlet",y);
   }
}
