import { Component, OnInit } from '@angular/core';
import { Month1Component } from './month1/month1.component';
import { Month2Component } from './month2/month2.component';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MothlyComponent implements OnInit {
  months = [
    {
      "name":"Month 1",
      "description":"From March 29th to May 3rd",
      "component":Month1Component
    },
    {
      "name":"Month 2",
      "description":"From May 3rd to June 4th",
      "component":Month2Component
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
