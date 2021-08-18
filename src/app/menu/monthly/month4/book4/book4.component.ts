import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book4',
  templateUrl: './book4.component.html',
  styleUrls: ['./book4.component.scss']
})
export class Book4Component implements OnInit {

  constructor(public dialogRef:MatDialogRef<Book4Component>) { }

  ngOnInit(): void {
  }

}
