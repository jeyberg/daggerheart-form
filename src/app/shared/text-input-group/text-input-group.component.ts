import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-text-input-group',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    TitleCasePipe
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
