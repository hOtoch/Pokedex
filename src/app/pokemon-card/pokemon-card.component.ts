import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: string;
  @Input() numberPokemon : number;
  formatNumber: string = '';
  

  constructor() {
    this.pokemon = '';
    this.numberPokemon = 0;
    this.formatNumber = '';
  }


  getUrlImage() {
    this.formatNumber = this.leadingZeros(this.numberPokemon, 3);
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${this.formatNumber}.png`;
  }

  leadingZeros(numero: number, digitos: number): string {
    let numeroString: string = numero.toString();
    while (numeroString.length < digitos) {
        numeroString = '0' + numeroString;
    }
    return numeroString;
  }
} 
