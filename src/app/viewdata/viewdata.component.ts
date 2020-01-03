import { Component, OnInit } from '@angular/core';
import { LoginserService } from '../loginser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

 view:any[]=[];

  constructor(private r1:Router ,public s:LoginserService) { 
    
  }
  arr:any[]=["","airtel","idea","jio","uninor","docomo"];
  data="all";
 

sel(x)
{
 this.data=x;
}

recharge:any[]=[];

  ngOnInit() {

this.fetchdata();

  }
obj:any={};
  delete(i)
  {
    this.obj.id=this.view[i].id;
    console.log(this.obj.id);

    this.s.deletedata(this.obj).subscribe(b=>
      {
        alert("deleted successfully")
        this.fetchdata();
      });
  }
  fetchdata(){
    this.s.viewData().subscribe((v:any)=>this.view=v);
  }
 
}
