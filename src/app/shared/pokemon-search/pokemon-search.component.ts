import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent{
  searchedPokemon: string = '';
  @Output() public searchPokemon : EventEmitter<string> = new EventEmitter();

  public search(value : string){
    this.searchPokemon.emit(value);
  }
}
