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
