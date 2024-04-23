import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})
export class CompareComponent {
    @Output() emmitCompare = new EventEmitter<boolean>();

    onCheckboxChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.emmitCompare.emit(target.checked);
    }
}
