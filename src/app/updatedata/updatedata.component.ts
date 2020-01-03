import { Component, OnInit } from '@angular/core';
import { LoginserService } from '../loginser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {

  constructor(public sc:LoginserService ,private a:ActivatedRoute,private r:Router) { }
  arr:any[]=["","airtel","idea","jio"];

    tp:number;

    rech: any[] = [];
  
    list:any={}; 
   
    ngOnInit() {
  
      this.tp=this.a.snapshot.params['i'];
  
      this.sc.viewData().subscribe((d: any) =>
      {
        this.rech = d
  
        for(let i=0;i<this.rech.length;i++)
        {
          if(i==this.tp)
          {
            this.list=this.rech[i];
            break;
          }
        }
      });
  
   
    }
  
    addrech()
    {
      
      this.sc.editdata(this.list).subscribe(d=>
        {
           this.r.navigate(['/view']);
        });   
  
    }

    
}
