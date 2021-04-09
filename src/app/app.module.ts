import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { WeeklyComponent } from './menu/weekly/weekly.component';
import { Week1Component } from './menu/weekly/week1/week1.component';
import { Week2Component } from './menu/weekly/week2/week2.component';
import { MothlyComponent } from './menu/mothly/mothly.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    WeeklyComponent,
    Week1Component,
    Week2Component,
    MothlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
