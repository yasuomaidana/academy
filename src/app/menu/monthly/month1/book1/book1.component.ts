import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-book1',
  templateUrl: './book1.component.html',
  styleUrls: ['./book1.component.scss']
})
export class Book1Component implements OnInit {

  constructor(public dialogRef:MatDialogRef<Book1Component>) { }

  ngOnInit(): void {
  }

}
