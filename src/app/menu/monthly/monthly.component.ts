import { Component, OnInit } from '@angular/core';
import { Month1Component } from './month1/month1.component';

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
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
