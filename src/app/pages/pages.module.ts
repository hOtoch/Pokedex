import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonListComponent } from '../shared/pokemon-list/pokemon-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalDetailsComponent } from './modal-details/modal-details.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ModalDetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    BrowserModule
  ]
})
export class PagesModule { }
