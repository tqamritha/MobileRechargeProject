import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NewserService } from '../newser.service';

@Component({
  selector: 'app-userregform',
  templateUrl: './userregform.component.html',
  styleUrls: ['./userregform.component.css']
})
export class UserregformComponent implements OnInit {

  constructor(private r:Router, public myser:NewserService) { }
  
  
  ngOnInit() { 
  }

  add(x)
  {
    // console.log(x);
    this.myser.saveinfo(x).subscribe(r=>{

      this.r.navigate(['/login']);
    });

  }
 
  keyPress(event: any) {
    const pattern = /[0-9\ ]/;
  
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
