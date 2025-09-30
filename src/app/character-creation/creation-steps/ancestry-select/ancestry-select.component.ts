import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ancestry } from '../../../../types/heritage';

@Component({
  selector: 'app-ancestry-select',
  imports: [],
  templateUrl: './ancestry-select.component.html',
  styleUrl: './ancestry-select.component.sass'
})
export class AncestrySelectComponent {
  formControl = input.required<FormControl>()
  ancestries = input.required<Ancestry[]>()
}
