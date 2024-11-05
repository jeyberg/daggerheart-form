import {
  Component,
  input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Trait } from '../../types/enums';
import { TitleCasePipe } from '@angular/common';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-trait-select',
  standalone: true,
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './trait-select.component.html',
  styleUrl: './trait-select.component.sass',
})
export class TraitSelectComponent implements OnInit, OnDestroy {
  controlName = input.required<string>();
  label = input.required<string>();
  formGroup = input.required<FormGroup>();

  traits = Object.values(Trait);
  neighborValues: Trait[] = [];

  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.formGroup()
      .valueChanges.pipe(
        tap((newValues: {[key: string]: Trait}) => {
          this.neighborValues = Object.keys(newValues)
            .filter((key) => key !== this.controlName())
            .map((key) => newValues[key]);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
