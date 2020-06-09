import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { RollingCounterDirective } from './ui/directives/rolling-counter.directive';

@NgModule({
  declarations: [RollingCounterDirective],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  exports: [
    CommonModule, BrowserModule, AppRoutingModule, ChartsModule, FormsModule
  ]
})
export class SharedModule { }
