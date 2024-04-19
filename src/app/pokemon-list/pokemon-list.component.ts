import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  currentPage : number = 1;
  itemsPerPage : number = 30;

  constructor(public pokemonService: PokemonService) { }

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  getNumberPokemon(index: number): number {
    return (this.currentPage - 1) * this.itemsPerPage + index + 1;
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }   
}
