import { Component, Input } from '@angular/core';
import { UtilitiesService } from '../../services/utilities.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailsComponent } from '../../pages/modal-details/modal-details.component';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemonName: string;
  @Input() numberPokemon : number;
  @Input() pokemon : any;
  formatNumber: string = '';
  typesPokemon: string[] = [];

  constructor(public utilitiesService: UtilitiesService
    , public dialog : MatDialog  ) {
    this.pokemonName = '';
    this.numberPokemon = 0;
    this.formatNumber = '';

  }

  openDetailsModal() : void {
    console.log('Abrindo modal');
    const dialogRef = this.dialog.open(ModalDetailsComponent, {
     
      data: {pokemon : this.pokemon}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado');
    });
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
