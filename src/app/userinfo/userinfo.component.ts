import { Component, OnInit } from '@angular/core';
import { LoginserService } from '../loginser.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(public p:LoginserService) { }
  view:any[]=[];
  
  ngOnInit() {
    this.p.viewuser().subscribe((v:any)=>this.view=v);
  }

  

}
