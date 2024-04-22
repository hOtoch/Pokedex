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
  private setPokemons : any;

  constructor(
    public pokemonService: PokemonService,
    public utilitiesService: UtilitiesService) {}

  ngOnInit() :void {
    this.pokemonService.apiListAllPokemons.subscribe(
      (res) => {
        this.setPokemons = res.results;
        this.pokemons = this.setPokemons;
        console.log(this.pokemons);
      }
    );
  }

  public searchPokemon(value : string){
    const filter = this.setPokemons.filter((pokemon: any) => {
      return !pokemon.name.indexOf(value.toLowerCase());
    });

    this.pokemons = filter;
  }

  getNumberPokemon(status : any){
    // return (this.currentPage - 1) * this.itemsPerPage + index + 1;
    return status?.id;
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  
}
