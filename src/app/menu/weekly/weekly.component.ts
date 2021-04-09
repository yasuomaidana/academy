import { Component, OnInit } from '@angular/core';
import { Week1Component } from './week1/week1.component'
import { Week2Component } from './week2/week2.component'
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
    }
  ];
  constructor() {
   }

  ngOnInit(): void {
    console.log();
  }

}
