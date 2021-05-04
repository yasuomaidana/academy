import { Component, OnInit } from '@angular/core';
import { Book1Component } from './book1/book1.component';
import { MatDialog} from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Book2Component } from './book2/book2.component';
import { ResumeComponent } from './resume/resume.component';

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
      "page":ResumeComponent
    }];
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openBook(book: ComponentType<unknown>){
    this.dialog.open(book,{width:"100%",height:"100%"})
  }
}
