import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { CardData } from '../../../types';
import { ValueDisplayComponent } from "../value-display/value-display.component";

@Component({
  selector: 'app-card',
  imports: [CardModule, PanelModule, ValueDisplayComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  data = input.required<CardData>();
}
