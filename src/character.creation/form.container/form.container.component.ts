import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  Ancestry,
  AncestryName,
  Community,
  CommunityName,
} from '../../types/heritage';
import {
  CharacterClassName,
  characterClasses,
  CharacterSubclassName,
  classToSubclassMap,
} from '../../types/class';
import { JsonPipe } from '@angular/common';
import { StepOneComponent } from '../creation.steps/step.one/step.one.component';
import { StepTwoComponent } from '../creation.steps/step.two/step.two.component';
import { StepThreeComponent } from '../creation.steps/step.three/step.three.component';
import { Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { isCharacterClass } from '../../helper-functions/type-checks';
import { Store } from '@ngrx/store';
import { formLoaded } from '../../app/store/actions';
import {
  selectAncestries,
  selectArmorByTier,
  selectCharacterClassNames,
  selectCommunities,
  selectPrimaryWeaponsByTier,
  selectSecondaryWeaponsByTier,
  selectStartingItems,
  selectCharacterSubclassesNames,
} from '../../app/store/selectors';
import { Armor, Item, Weapon } from '../../types/items';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-form.container',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    LetDirective,
  ],
  templateUrl: './form.container.component.html',
  styleUrl: './form.container.component.sass',
})
export class FormContainerComponent implements OnInit, OnDestroy {
  @Output() loaded = new EventEmitter<void>();

  form: FormGroup;
  characterClasses = characterClasses;
  classToSubclassMap = classToSubclassMap;
  subclassOption1?: CharacterSubclassName;
  subclassOption2?: CharacterSubclassName;
  store: Store;

  characterClassesForForm$: Observable<{ name: CharacterClassName, subclasses: CharacterSubclassName[]}[]>;
  subclassOptions$: Observable<CharacterSubclassName[]> = of([]);
  primaryT1Weapons$: Observable<Weapon[]>;
  secondaryT1Weapons$: Observable<Weapon[]>;
  t1Armor$: Observable<Armor[]>;
  startingItems$: Observable<Item[]>;
  ancestries$: Observable<Ancestry[]>;
  communities$: Observable<Community[]>;

  destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, store: Store) {
    this.form = this.createForm();
    this.store = store;
    this.characterClassesForForm$ = this.store.select(selectCharacterClassNames);
    this.primaryT1Weapons$ = store.select(selectPrimaryWeaponsByTier(1));
    this.secondaryT1Weapons$ = store.select(selectSecondaryWeaponsByTier(1));
    this.startingItems$ = store.select(selectStartingItems);
    this.t1Armor$ = store.select(selectArmorByTier(1));
    this.ancestries$ = store.select(selectAncestries);
    this.communities$ = store.select(selectCommunities)
  }

  ngOnInit(): void {
    this.onCharacterClassChanges();
    this.store.dispatch(formLoaded());
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      step1: this.fb.group({
        name: [''],
        pronouns: [''],
        ancestry: ['' as AncestryName],
        community: ['' as CommunityName],
      }),
      step2: this.fb.group({
        characterClass: ['' as CharacterClassName],
        subclass: ['' as CharacterSubclassName],
        traits: this.fb.group({
          agility: [0],
          strength: [0],
          finesse: [0],
          instinct: [0],
          presence: [0],
          knowledge: [0],
        }),
      }),
      step3: this.fb.group({
        primaryWeapon: [],
        secondaryWeapon: [],
        armor: [],
        startingCommonItem: [],
        startingClassItem: [],
        domainCards: []
      }),
      step4: this.fb.group({
        description: this.fb.group({
          clothes: [''],
          eyes: [''],
          body: [''],
          bodyColor: [''],
          attitude: [''],
        }),
        backgroundQuestions: this.fb.group({
          1: [''],
          2: [''],
          3: [''],
        }),
        experiences: this.fb.group({
          1: [''],
          2: [''],
          3: [''],
        }),
        connections: this.fb.group({
          1: [''],
          2: [''],
          3: [''],
        }),
      }),
    });
  }

  private onCharacterClassChanges(): void {
    (this.form.controls['step2'] as FormGroup).controls[
      'characterClass'
    ].valueChanges
      .pipe(
        tap((value) => {
          if (isCharacterClass(value)) {
            this.store.select(selectCharacterSubclassesNames(value));
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}

