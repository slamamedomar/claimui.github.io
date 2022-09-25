import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

}

active(event:any){
  event.srcElement.class.remove("active");
  setTimeout(()=>{
    event.srcElement.class.add("active");
  },0)
}

}
