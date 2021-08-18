import { Component, OnInit } from '@angular/core';
import { Month1Component } from './month1/month1.component';
import { Month2Component } from './month2/month2.component';
import { Month3Component } from './month3/month3.component';
import { Month4Component } from './month4/month4.component';

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
    },
    {
      "name":"Month 3",
      "description":"From June 7th to July 9th",
      "component":Month3Component
    },
    {
      "name":"Month 4",
      "description":"From July 12th to August 9th",
      "component":Month4Component
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
