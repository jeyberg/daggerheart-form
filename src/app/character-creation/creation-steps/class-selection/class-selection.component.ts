import { Component, computed, inject, input } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { CharacterClass, CharacterClassName, CharacterSubclassName } from '../../../../types/class';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { Domain } from '../../../../types/enums';
import { toSignal } from '@angular/core/rxjs-interop';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from "primeng/button";
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-class-selection',
  imports: [ListboxModule, ReactiveFormsModule, PanelModule, CardModule, ButtonModule, AccordionModule],
  templateUrl: './class-selection.component.html',
  styleUrl: './class-selection.component.sass',
})
export class ClassSelectionComponent {
  classes = input.required<CharacterClass[]>();
  classNames = computed(() => this.classes().map((klass) => klass.name));
  classDomains = computed(() => {
    const obj: { [key: string]: Domain[] } = {};
    this.classes().forEach((klass) => (obj[klass.name] = klass.domains));
    return obj;
  });
  formGroup = inject(FormGroupDirective).form;
  controlName = 'characterClass';
  listBoxValue = toSignal(this.formGroup.get(this.controlName)!.valueChanges);
  selectedClass = computed(() =>
    this.classes().find((klass) => klass.name == this.listBoxValue())
  );

  onSelectSubclass(name: CharacterSubclassName): void {
    this.formGroup.get('subclass')?.setValue(name);
  }

  onSelectClass(event: any, name: CharacterClassName): void {
    event.preventDefault();
    const control = this.formGroup.get(this.controlName);
    if (control) {
      control.setValue(name);
    }
  }
}
