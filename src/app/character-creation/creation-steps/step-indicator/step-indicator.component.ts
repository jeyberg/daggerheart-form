import { Component, input } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { AncestrySelectComponent } from "../ancestry-select/ancestry-select.component";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-step-indicator',
  imports: [StepperModule, ButtonModule],
  templateUrl: './step-indicator.component.html',
  styleUrl: './step-indicator.component.sass'
})
export class StepIndicatorComponent {
  stepLabels = ['Ancestry', 'Community', 'Class', 'Domain Cards', 'Equipment', 'Details']
}
