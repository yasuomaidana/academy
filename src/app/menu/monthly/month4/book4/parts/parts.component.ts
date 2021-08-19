import { Component, OnInit } from '@angular/core';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  parts = [
    {
      "name":"Data structures and algorithms",
      "description":"Part 1 from chapters 1-16",
      "component":Part1Component
    },
    {
      "name":"Domain Specific Problems",
      "description":"Part 2 from chapters 17-20",
      "component":Part2Component
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
