import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css',
})
export class CompareComponent {
    constructor(private snackBar : MatSnackBar) { }
    @Output() emmitCompare = new EventEmitter<boolean>();

    private snackBarRef: MatSnackBarRef<SimpleSnackBar> | null = null;

    onCheckboxChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.emmitCompare.emit(target.checked);

      if(target.checked){
        this.snackBarRef = this.snackBar.open('Select two pokemons to compare!', 'Cancel',);

        this.snackBarRef.onAction().subscribe(() => {
          target.checked = false;
          this.emmitCompare.emit(false);
        });
      }else{
        if(this.snackBarRef){
          this.snackBarRef.dismiss();
        }
      }
    }
}
