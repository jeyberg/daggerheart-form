import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardDescription } from '../../../types';

@Component({
  selector: 'app-card-grid',
  imports: [CardComponent],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.sass'
})
export class CardGridComponent {
  cards = input.required<CardDescription[]>()
}
