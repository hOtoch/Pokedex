import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { ModalCompareComponent } from './modal-compare/modal-compare.component';



@NgModule({
  declarations: [
    HomeComponent,
    ModalDetailsComponent,
    ModalCompareComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    BrowserModule
  ]
})
export class PagesModule { }
