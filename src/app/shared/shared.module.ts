import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from './ui/cards/cards.component';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule, BrowserModule, AppRoutingModule
  ]
})
export class SharedModule { }
