import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CharacterSubclassName, CharacterClassName, CharacterClass } from '../../../types/class';
import { DomainCard } from '../../../types/domain-card.type';
import { Trait } from '../../../types/enums';
import { AncestryName, Community, CommunityName } from '../../../types/heritage';
import { Weapon, Armor, Item } from '../../../types/items';
import { selectCharacterClassNames, selectPrimaryWeaponsByTier, selectSecondaryWeaponsByTier, selectStartingItems, selectArmorByTier, selectAncestries, selectCommunities, selectAncestryCards, selectAllClasses, selectCommunityCards } from '../../store/selectors';
import { StepIndicatorComponent } from "../creation-steps/step-indicator/step-indicator.component";
import { CardData } from '../../../types';
import { LetDirective } from '@ngrx/component';
import { formLoaded } from '../../store/actions';
import { CardSelectComponent } from '../../shared/card-select/card-select.component';
import { JsonPipe } from '@angular/common';
import { ClassSelectionComponent } from "../creation-steps/class-selection/class-selection.component";
import { PanelModule } from "primeng/panel";

@Component({
  selector: 'app-character-creation-container',
  imports: [StepIndicatorComponent, ReactiveFormsModule, LetDirective, CardSelectComponent, JsonPipe, ClassSelectionComponent, PanelModule],
  templateUrl: './character-creation-container.component.html',
  styleUrl: './character-creation-container.component.sass'
})
export class CharacterCreationContainerComponent implements OnInit {
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
  communities$: Observable<Community[]>;
  communityCards$: Observable<CardData[]>;
  ancestryCards$: Observable<CardData[]>;
  characterClasses$: Observable<CharacterClass[]>;
  characterSubClasses$: Observable<CardData[]> = of([]);

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.createForm();

    this.characterClassesForForm$ = this.store.select(selectCharacterClassNames);
    this.primaryT1Weapons$ = store.select(selectPrimaryWeaponsByTier(1));
    this.secondaryT1Weapons$ = store.select(selectSecondaryWeaponsByTier(1));
    this.startingItems$ = store.select(selectStartingItems);
    this.t1Armor$ = store.select(selectArmorByTier(1));
    this.communities$ = store.select(selectCommunities);
    this.ancestryCards$ = store.select(selectAncestryCards);
    this.characterClasses$ = store.select(selectAllClasses);
    this.communityCards$ = store.select(selectCommunityCards);
  }

  ngOnInit(): void {
    this.store.dispatch(formLoaded())
  }

  private createForm(): FormGroup {
    return this.fb.group({
      ancestry: ['' as AncestryName],
      community: ['' as CommunityName],
      characterClass: ['' as CharacterClassName],
      subclass: ['' as CharacterSubclassName],
      traits: this.fb.group({
        plusTwo: [''],
        firstPlusOne: [''],
        secondPlusOne: [''],
        minusOne: [''],
      }),
      domainCards: [],
      equipment: this.fb.group({
        primaryWeapon: [],
        secondaryWeapon: [],
        armor: [],
        startingCommonItem: [],
        startingClassItem: [],
      }),
      details: this.fb.group({
        name: [''],
        pronouns: [''],
        description: this.createFormControlArray(5),
        backgroundQuestions: this.createFormControlArray(3),
        experiences: this.createFormControlArray(3),
        connections: this.createFormControlArray(3),
      }),
    });
  }

  private createFormControlArray(length: number): FormArray {
    return this.fb.array(Array(length).fill(null).map(() => new FormControl('')));
  }
}
