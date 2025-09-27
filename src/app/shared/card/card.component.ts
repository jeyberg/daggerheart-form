import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { CardDescription } from '../../../types';

@Component({
  selector: 'app-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  description = input.required<CardDescription>();
}
