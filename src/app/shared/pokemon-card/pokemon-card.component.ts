import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() isCompareChecked : boolean;
  @Input() isComparing : boolean;
  @Output() emmitPokemonChecked = new EventEmitter<any>();
  formatNumber: string = '';
  typesPokemon: string[] = [];

  constructor(public utilitiesService: UtilitiesService
    , public dialog : MatDialog  ) {
    this.pokemonName = '';
    this.numberPokemon = 0;
    this.formatNumber = '';
    this.isCompareChecked = false;
    this.isComparing = false;
  }

  onClickCard() : void {
    if(!this.isComparing){
      if(this.isCompareChecked){
        this.emmitPokemonChecked.emit(this.pokemon);
      }else{
        this.openDetailsModal();
      }
    }
  }

  openDetailsModal() : void {
    
    const dialogRef = this.dialog.open(ModalDetailsComponent, {
     
      data: {pokemon : this.pokemon}
    });

    dialogRef.afterClosed().subscribe(result => {
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
