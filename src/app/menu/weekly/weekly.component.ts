import { Component, OnInit } from '@angular/core';
import { Week1Component } from './week1/week1.component';
import { Week2Component } from './week2/week2.component';
import { Week3Component } from './week3/week3.component';
import { Week4Component } from './week4/week4.component';
import { Week5Component } from './week5/week5.component';
import { Week6Component } from './week6/week6.component';
import { Week7Component } from './week7/week7.component';
import { Week8Component } from './week8/week8.component';
import { Week9Component } from './week9/week9.component';
import { Week10Component } from './week10/week10.component';
import { Week11Component } from './week11/week11.component';
import { Week12Component } from './week12/week12.component';
import { Week13Component } from './week13/week13.component';
import { Week14Component } from './week14/week14.component';
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
    },
    {
      "name":"Week 6",
      "description":"From May 3rd to May 7th",
      "component":Week6Component
    },
    {
      "name":"Week 7",
      "description":"From May 10th to May 14th",
      "component":Week7Component
    },
    {
      "name":"Week 8",
      "description":"From May 17th to May 21th",
      "component":Week8Component
    },
    {
      "name":"Week 9",
      "description":"From May 24th to May 28th",
      "component":Week9Component
    },
    {
      "name":"Week 10",
      "description":"From May 31st to June 5th",
      "component":Week10Component
    },
    {
      "name":"Week 11",
      "description":"From June 7th to June 11th",
      "component":Week11Component
    },
    {
      "name":"Week 12",
      "description":"From June 14th to June 18th",
      "component":Week12Component
    },
    {
      "name":"Week 13",
      "description":"From June 22th to June 26th",
      "component":Week13Component
    },{
      "name":"Week 14",
      "description":"From June 28th to July 2nd",
      "component":Week14Component
    }
    
  ];
  constructor() {
   }

  ngOnInit(): void {
    console.log();
  }

}
