import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { WeeklyComponent } from './menu/weekly/weekly.component';
import { Week1Component } from './menu/weekly/week1/week1.component';
import { Week2Component } from './menu/weekly/week2/week2.component';
import { MothlyComponent } from './menu/monthly/monthly.component';
import { Month1Component } from './menu/monthly/month1/month1.component';
import { Book1Component } from './menu/monthly/month1/book1/book1.component';
import { Book2Component } from './menu/monthly/month1/book2/book2.component';
import { Week3Component } from './menu/weekly/week3/week3.component';
import { Week4Component } from './menu/weekly/week4/week4.component';
import { Week5Component } from './menu/weekly/week5/week5.component';
import { ResumeComponent } from './menu/monthly/month1/resume/resume.component';
import { Week6Component } from './menu/weekly/week6/week6.component';
import { Week7Component } from './menu/weekly/week7/week7.component';
import { Week8Component } from './menu/weekly/week8/week8.component';
import { Week9Component } from './menu/weekly/week9/week9.component';
import { Week10Component } from './menu/weekly/week10/week10.component';
import { Month2Component } from './menu/monthly/month2/month2.component';
import { Week11Component } from './menu/weekly/week11/week11.component';
import { Week12Component } from './menu/weekly/week12/week12.component';
import { Week13Component } from './menu/weekly/week13/week13.component';
import { Week14Component } from './menu/weekly/week14/week14.component';
import { Week15Component } from './menu/weekly/week15/week15.component';
import { Month3Component } from './menu/monthly/month3/month3.component';
import { Week16Component } from './menu/weekly/week16/week16.component';
import { Week17Component } from './menu/weekly/week17/week17.component';
import { Week18Component } from './menu/weekly/week18/week18.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    WeeklyComponent,
    Week1Component,
    Week2Component,
    MothlyComponent,
    Month1Component,
    Book1Component,
    Book2Component,
    Week3Component,
    Week4Component,
    Week5Component,
    ResumeComponent,
    Week6Component,
    Week7Component,
    Week8Component,
    Week9Component,
    Week10Component,
    Month2Component,
    Week11Component,
    Week12Component,
    Week13Component,
    Week14Component,
    Week15Component,
    Month3Component,
    Week16Component,
    Week17Component,
    Week18Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
