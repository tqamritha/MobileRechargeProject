import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewserService {

  constructor(public c:HttpClient) { }

  saveinfo(y)
  {
      return this.c.post("http://localhost:8081/MobileRecharge/demo",y);
  }
}
