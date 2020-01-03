import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newdata',
  templateUrl: './newdata.component.html',
  styleUrls: ['./newdata.component.css']
})
export class NewdataComponent implements OnInit {

  constructor(public r:Router) { }

  ngOnInit() {
  }
  add()
  {
    // this.r.navigate([]);
  }

}
