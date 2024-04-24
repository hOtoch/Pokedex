import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { UtilitiesService } from '../../services/utilities.service';
import { ModalCompareComponent } from 'src/app/pages/modal-compare/modal-compare.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
  currentPage : number = 1;
  itemsPerPage : number = 30;
  isCompareChecked = false;

  @ViewChild('container') container: ElementRef | undefined;

  public pokemons: any;
  private setPokemons : any;
  public pokemonsChecked : any = [];

  constructor(
    public pokemonService: PokemonService,
    public utilitiesService: UtilitiesService,
    public dialog : MatDialog ) {}

  ngOnInit() :void {
    this.pokemonService.apiListAllPokemons.subscribe(
      (res) => {
        this.setPokemons = res.results;
        this.pokemons = this.setPokemons;

        this.calculateItemsPerPage();
      }
    );
  }

  calculateItemsPerPage() {
    if (this.container) {
      const containerWidth = this.container.nativeElement.offsetWidth;
      const containerHeight = this.container.nativeElement.offsetHeight;

      const itensPerRow = Math.floor(containerWidth / 270);
      const itensPerColumn = Math.floor(containerHeight / 420);

      this.itemsPerPage = itensPerRow * itensPerColumn;
    }

  }



  onCheckboxChange(checked: boolean) {
    this.isCompareChecked = checked;

    if(!checked){
      this.pokemonsChecked = [];
    }
  }

  onEmmitPokemonChecked(pokemon: any) {
    if(this.pokemonsChecked.length < 2){
      this.pokemonsChecked.push(pokemon);
    }
    if(this.pokemonsChecked.length === 2){
      this.openCompareModal();
    }
  }

  openCompareModal() : void {
    
    const dialogRef = this.dialog.open(ModalCompareComponent, {
      data: {pokemons : this.pokemonsChecked}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pokemonsChecked = [];
    });
  }

  public searchPokemon(value : string){
    const filter = this.setPokemons.filter((pokemon: any) => {
      return !pokemon.name.indexOf(value.toLowerCase());
    });

    this.pokemons = filter;
  }


  getNumberPokemon(status : any){
    return status?.id;
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  
}
