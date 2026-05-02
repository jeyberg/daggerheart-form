import { Component, input } from '@angular/core';

@Component({
  selector: 'app-value-display',
  imports: [],
  templateUrl: './value-display.component.html',
  styleUrl: './value-display.component.sass',
  host: {
    '[style.display]': '"flex"',
    '[style.flex-direction]': '"column"',
    '[style.align-items]': '"center"',
    '[style.flex-grow]': '1',
    '[style.flex-basis]':'0',
    '[style.padding]': '"4px"',
    '[style.boder-style]': '"solid"',
    '[style.border-radius]': '"4px"',
    '[style.border-width]': '"2px"',
  }
})
export class ValueDisplayComponent {
  label = input.required<string>();
  value = input.required<any>();
}
