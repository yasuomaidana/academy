import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Book1Component } from './book1/book1.component';
import { Book2Component } from './book2/book2.component';
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
      "title":"Code: The Hidden Language of Computer Hardware & Software",
      "author":"Charles Petzold",
      "imageA":"assets/Month 1/Charles_petzold.png",
      "imageB":"assets/Month 1/Code.jpg",
      "page":Book1Component
    },{
      "title":"Make It Stick",
      "author":"Peter C. Brow, Henry L. Roediger III, Marc A. Mc.Daniel",
      "imageA":"assets/Month 1/MSA.jpg",
      "imageB":"assets/Month 1/MakeStick.jpg",
      "page":Book2Component
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
