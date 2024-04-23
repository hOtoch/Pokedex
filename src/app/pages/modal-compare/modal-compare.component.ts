import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilitiesService } from 'src/app/services/utilities.service';	

@Component({
  selector: 'app-modal-compare',
  templateUrl: './modal-compare.component.html',
  styleUrl: './modal-compare.component.css'
})
export class ModalCompareComponent {
  constructor(public dialogRef : MatDialogRef<ModalCompareComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public utilitiesService: UtilitiesService
  ) { }

  pokemons : any = this.data.pokemons;

  getTotalPower(pokemon : any) {
    return pokemon.status.stats.reduce((total : number, stat : any) => {
      return total + stat.base_stat;
    }, 0);
  }

  getTheBetterPokemon(){
    let totalPower1 = this.getTotalPower(this.pokemons[0]);
    let totalPower2 = this.getTotalPower(this.pokemons[1]);
    if(totalPower1 > totalPower2){
      return `${this.utilitiesService.capitalizeFirstLetter(this.pokemons[0].name)} is better than ${this.utilitiesService.capitalizeFirstLetter(this.pokemons[1].name)}`;
    }else if(totalPower1 < totalPower2){
      return `${this.utilitiesService.capitalizeFirstLetter(this.pokemons[1].name)} is better than ${this.utilitiesService.capitalizeFirstLetter(this.pokemons[0].name)}`;
    }else{
      return 'Both pokemons have the same power';
    }
  }

  close() :void {
    this.dialogRef.close();
  }
}
