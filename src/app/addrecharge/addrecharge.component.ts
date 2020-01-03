import { Component, OnInit } from '@angular/core';
import { LoginserService } from '../loginser.service';

@Component({
  selector: 'app-addrecharge',
  templateUrl: './addrecharge.component.html',
  styleUrls: ['./addrecharge.component.css']
})
export class AddrechargeComponent implements OnInit {

  constructor(public p:LoginserService) { }

  ngOnInit() {
  }

  arr:any[]=["","airtel","idea","jio","docomo","uninor"];
data:any={};

sel(x)
{
 this.data.operator=x;
}
  onSubmit()
  {
    // console.log(this.data);
  this.p.adminData(this.data).subscribe();
  }


}
