import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-text-input-group',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TitleCasePipe,
    InputTextModule,
    FloatLabelModule
  ],
  templateUrl: './text-input-group.component.html',
  styleUrl: './text-input-group.component.sass'
})
export class TextInputGroupComponent {
  formGroup = input.required<FormGroup>();
  formArrayName = input.required<string>();
  fieldSetName = input<string>();
  labels = input.required<string[]>();
}
