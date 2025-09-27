import { Component, input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { CharacterSubclassName, CharacterClassName } from '../../../types/class';
import { DomainCard } from '../../../types/domain-card.type';
import { Trait } from '../../../types/enums';
import { Ancestry, AncestryName, Community, CommunityName } from '../../../types/heritage';
import { Weapon, Armor, Item } from '../../../types/items';
import { selectCharacterClassNames, selectPrimaryWeaponsByTier, selectSecondaryWeaponsByTier, selectStartingItems, selectArmorByTier, selectAncestries, selectCommunities } from '../../store/selectors';
import { StepIndicatorComponent } from "../creation-steps/step-indicator/step-indicator.component";

@Component({
  selector: 'app-character-creation-container',
  imports: [StepIndicatorComponent],
  templateUrl: './character-creation-container.component.html',
  styleUrl: './character-creation-container.component.sass'
})
export class CharacterCreationContainerComponent {
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

  private createFormControlArray(length: number): FormArray {
    return this.fb.array(Array(length).fill(null).map(() => new FormControl('')));
  }
}
