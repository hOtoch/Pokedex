import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { UtilitiesService } from '../../services/utilities.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
  currentPage : number = 1;
  itemsPerPage : number = 30;

  public pokemons: any;

  constructor(
    public pokemonService: PokemonService,
    public utilitiesService: UtilitiesService) {}

  ngOnInit() :void {
    this.pokemonService.apiListAllPokemons.subscribe(
      (res) => {
        this.pokemons = res.results;
        console.log(res);
      }
    );
  }

  

  getNumberPokemon(index: number): number {
    return (this.currentPage - 1) * this.itemsPerPage + index + 1;
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  
}
