import { Component, OnInit } from '@angular/core';
import { Week1Component } from './week1/week1.component'
import { Week2Component } from './week2/week2.component'
import { Week3Component } from './week3/week3.component';
import { Week4Component } from './week4/week4.component';
import { Week5Component } from './week5/week5.component';
@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {
  weeks = [
    {
      "name":"Week 1",
      "description":"From March 29th to April 2nd",
      "component":Week1Component
    },
    {
      "name":"Week 2",
      "description":"From April 5th to April 9th",
      "component":Week2Component
    },
    {
      "name":"Week 3",
      "description":"From April 12th to April 16th",
      "component":Week3Component
    },
    {
      "name":"Week 4",
      "description":"From April 19th to April 23th",
      "component":Week4Component
    },
    {
      "name":"Week 5",
      "description":"From April 26th to April 30th",
      "component":Week5Component
    }
  ];
  constructor() {
   }

  ngOnInit(): void {
    console.log();
  }

}
