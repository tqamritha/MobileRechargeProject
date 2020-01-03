import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit() {
  }
  onSubmit(x)
  {
  console.log(x)
  }
  goback()
{
  this.r.navigate(['/login']);
}

}
