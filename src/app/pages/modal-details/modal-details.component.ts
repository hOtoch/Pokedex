import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrl: './modal-details.component.css'
})
export class ModalDetailsComponent {

  constructor(public dialogRef : MatDialogRef<ModalDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public utilitiesService: UtilitiesService
  ) { }

  getUrlModalImage(){
    return this.data.pokemon.status.sprites.other.dream_world.front_default;
  }

  getTotalPower() {
    return this.data.pokemon.status.stats.reduce((total : number, stat : any) => {
      return total + stat.base_stat;
    }, 0);
  }

  close() :void {
    this.dialogRef.close();
  }
}
