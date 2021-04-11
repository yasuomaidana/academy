import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book2',
  templateUrl: './book2.component.html',
  styleUrls: ['./book2.component.scss']
})
export class Book2Component implements OnInit {

  constructor(public dialogRef:MatDialogRef<Book2Component>) { }

  ngOnInit(): void {
  }

}
