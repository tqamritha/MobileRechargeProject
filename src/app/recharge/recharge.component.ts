import { Component, OnInit } from '@angular/core';
import { LoginserService } from '../loginser.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  constructor(private c:LoginserService) { }

  ngOnInit() {
  }

}
