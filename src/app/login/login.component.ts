import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LoginserService } from '../loginser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private r:Router,public service:LoginserService) { }
 
go()
{
  this.r.navigate(['/user']);
}
res:any={};
onSubmit(m)
{
  this.service.newlogin(m).subscribe((e:any)=>
  {
    this.res=e;
    if(this.res.status=="user")
    {
      alert("Successful login");
      localStorage.setItem("current",JSON.stringify(m.email));
      this.r.navigate(['/usrpanel']);
    }
    else if(this.res.status=="admin")
    {
      alert("Successful login Admin");
      localStorage.setItem("current",JSON.stringify(m.email));
      this.r.navigate(['/recharge']);
    }
    else{
      alert("please enter valid username and password");
    }
  }
  );
}



ngOnInit() {}


}
