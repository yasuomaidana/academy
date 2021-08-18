import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-book3',
  templateUrl: './book3.component.html',
  styleUrls: ['./book3.component.scss']
})
export class Book3Component implements OnInit {

  constructor(public dialogRef:MatDialogRef<Book3Component>) { }

  ngOnInit(): void {
  }

}
