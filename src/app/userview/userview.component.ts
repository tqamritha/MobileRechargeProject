import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserService } from '../loginser.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  
    view:any[]=[];
   
     constructor(private r1:Router ,public s:LoginserService) { 
       
     }
     arr:any[]=["","airtel","idea","jio"];
     data="all";
    
   
   sel(x)
   {
    this.data=x;
   }
   
     ngOnInit() {
       this.s.viewData().subscribe((v:any)=>this.view=v);
     }
     go()
     {
       // alert("hello");
      //  this.r1.navigate(["/data"]);

      this.s.rechargenow().subscribe();
    }

     
    
   




