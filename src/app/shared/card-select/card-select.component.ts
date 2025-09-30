import { Component, computed, inject, input } from '@angular/core';
import { CardData } from '../../../types';
import { Card } from 'primeng/card';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-select',
  imports: [Card, ReactiveFormsModule],
  templateUrl: './card-select.component.html',
  styleUrl: './card-select.component.sass'
})
export class CardSelectComponent {
  cards = input.required<CardData[]>();
  controlName = input.required<string>();
  formGroup = inject(FormGroupDirective).form
}
