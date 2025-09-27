import {
  Component,
  input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  Ancestry,
  AncestryName,
  Community,
  CommunityName,
} from '../../../types/heritage';
import {
  CharacterClassName,
  CharacterSubclassName,
} from '../../../types/class';
import { JsonPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
import { mergeMap, Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { formLoaded } from '../../store/actions';
import {
  selectAncestries,
  selectArmorByTier,
  selectCharacterClassNames,
  selectCommunities,
  selectPrimaryWeaponsByTier,
  selectSecondaryWeaponsByTier,
  selectStartingItems,
  selectClass,
  selectLvl1DomainCardsByDomains,
} from '../../store/selectors';
import { Armor, Item, Weapon } from '../../../types/items';
import { Trait } from '../../../types/enums';
import { TextInputGroupComponent } from '../../shared/text-input-group/text-input-group.component';
import { DomainCard } from '../../../types/domain-card.type';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    TitleCasePipe,
    KeyValuePipe,
    TextInputGroupComponent,
  ],
  templateUrl: './form.container.component.html',
  styleUrl: './form.container.component.sass',
})
export class FormContainerComponent implements OnInit, OnDestroy {
  form: FormGroup;
  traits = Object.values(Trait);
  traitsControlNameLabels = {
    plusTwo: '+2',
    firstPlusOne: '+1',
    secondPlusOne: '+1',
    minusOne: '-1'
  } as const;
  traitsOptionsState: {[key: string]: Trait[]} = {
    plusTwo: [],
    firstPlusOne: [],
    secondPlusOne: [],
    minusOne: [],
  };
  backgroundQuestions: string[] = [];
  connections: string[] = [];
  characterSubclassNames: CharacterSubclassName[] = [];
  classStartingItems: string[] = [];
  descriptionLabels: string[] = ['Clothes', 'Eyes', 'Body', 'Body Color', 'Attitude'];
  experienceLabes: string[] = ['First Experience', 'Second Experience', 'Third Experience'];
  
  domainCards$: Observable<DomainCard[]> = of([]);
  characterClassesForForm$: Observable<CharacterClassName[]>;
  primaryT1Weapons$: Observable<Weapon[]>;
  secondaryT1Weapons$: Observable<Weapon[]>;
  t1Armor$: Observable<Armor[]>;
  startingItems$: Observable<Item[]>;
  ancestries$: Observable<Ancestry[]>;
  communities$: Observable<Community[]>;
  
  destroy$ = new Subject<void>();

  domainCards = input.required<DomainCard[]>();
  characterClassNames = input.required<CharacterClassName[]>();
  primaryT1Weapons = input.required<Weapon[]>();
  secondaryT1Weapons = input.required<Weapon[]>();
  t1Armor = input.required<Armor[]>();
  startingItems = input.required<Item[]>();
  ancestries = input.required<Ancestry[]>();
  communities = input.required<Community[]>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.createForm();
    this.characterClassesForForm$ = this.store.select(selectCharacterClassNames);
    this.primaryT1Weapons$ = store.select(selectPrimaryWeaponsByTier(1));
    this.secondaryT1Weapons$ = store.select(selectSecondaryWeaponsByTier(1));
    this.startingItems$ = store.select(selectStartingItems);
    this.t1Armor$ = store.select(selectArmorByTier(1));
    this.ancestries$ = store.select(selectAncestries);
    this.communities$ = store.select(selectCommunities);
  }

  ngOnInit(): void {
    this.onCharacterClassChanges();
    this.onTraitsChanges();
    this.store.dispatch(formLoaded());
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  getFormGroup(formGroupName: string): FormGroup {
    return this.form.get(formGroupName) as FormGroup;
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
          plusTwo: [''],
          firstPlusOne: [''],
          secondPlusOne: [''],
          minusOne: [''],
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
        description: this.createFormControlArray(5),
        backgroundQuestions: this.createFormControlArray(3),
        experiences: this.createFormControlArray(3),
        connections: this.createFormControlArray(3),
      }),
    });
  }

  private onCharacterClassChanges(): void {
    (this.form.controls['step2'] as FormGroup).controls[
        'characterClass'
      ].valueChanges
        .pipe(
          mergeMap((className) => this.store.select(selectClass(className))),
          tap((characterClass) => {
            if (!characterClass) { return; }
            this.backgroundQuestions = characterClass.backgroundQuestions;
            this.connections = characterClass.connections;
            this.characterSubclassNames = characterClass.subclasses.map((subClass) => subClass.name);
            this.classStartingItems = characterClass.items.map((item) => item.name);
            this.domainCards$ = this.store.select(selectLvl1DomainCardsByDomains(...characterClass.domains));
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
  }

  private onTraitsChanges(): void {
    // TODO: refactor to component store
    (this.form.controls['step2'] as FormGroup).controls[
      'traits'
    ].valueChanges
    .pipe(
      tap((newValues) => {
        const controlNames = Object.keys(newValues);
        for(let controlName of controlNames) {
          this.traitsOptionsState[controlName] = controlNames
          .filter((name) => name !== controlName)
          .map((name) => newValues[name]);
        }
      }),
      takeUntil(this.destroy$)
    )
    .subscribe();
  }

  private createFormControlArray(length: number): FormArray {
    return this.fb.array(Array(length).fill(null).map(() => new FormControl('')));
  }
}

