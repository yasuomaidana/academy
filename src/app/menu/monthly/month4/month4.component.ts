import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Book3Component } from './book3/book3.component';
import { Book4Component } from './book4/book4.component';
import { SummaryComponent } from './summary/summary.component';
import { MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-month4',
  templateUrl: './month4.component.html',
  styleUrls: ['./month4.component.scss']
})
export class Month4Component implements OnInit {
  books =
    [{
      "title":"Cracking the Coding Interview",
      "author":"Gayle Laakmann Mcdowell",
      "imageA":"assets/Month 4/gayle.jpg",
      "imageB":"assets/Month 4/cracking the coding.jpg",
      "page":Book3Component
    },{
      "title":"Elements of Programming Interviews in Java",
      "author":"Adnan Aziz, Tsung-Hsien Lee, Amit Prakash",
      "imageA":"assets/Month 4/java.jpg",
      "imageB":"assets/Month 4/elements.jpg",
      "page":Book4Component
    },{
      "title":"Summary month 1",
      "author":"Yasuo Maidana",
      "imageA":"assets/Month 1/fotos.jpg",
      "imageB":"assets/Month 1/studying.jpg",
      "page":SummaryComponent
    }];
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openBook(book: ComponentType<unknown>){
    this.dialog.open(book,{width:"100%",height:"100%"})
  }
}
