import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { Book1Component } from './book1/book1.component';

@Component({
  selector: 'app-month1',
  templateUrl: './month1.component.html',
  styleUrls: ['./month1.component.scss']
})
export class Month1Component implements OnInit {
  books =
    [{
      "title":"Code: The Hidden Language of Computer Hardware & Software",
      "author":"Charles Petzold",
      "imageA":"assets/Month 1/Charles_petzold.png",
      "imageB":"assets/Month 1/Code.jpg",
      "page":Book1Component
    },{
      "title":"Code: The Hidden Language of Computer Hardware & Software",
      "author":"Charles Petzold",
      "imageA":"assets/Month 1/Charles_petzold.png",
      "imageB":"assets/Month 1/Code.jpg",
      "page":Book1Component
    },{
      "title":"Code: The Hidden Language of Computer Hardware & Software",
      "author":"Charles Petzold",
      "imageA":"assets/Month 1/Charles_petzold.png",
      "imageB":"assets/Month 1/Code.jpg",
      "page":Book1Component
    }];
  constructor() { }

  ngOnInit(): void {
  }
  openBook(book:Component){
    alert(book);
  }
}
