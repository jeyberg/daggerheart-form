import { createReducer, on } from '@ngrx/store';
import { Armor, Item, Weapon } from '../../types/items';
import { loadAncestriesSuccess, loadArmorSuccess, loadClassesSuccess, loadCommunitiesSuccess, loadDomainCardsSuccess, loadItemsSuccess, loadWeaponsSuccess } from './actions';
import { Ancestry, Community } from '../../types/heritage';
import { CharacterClass } from '../../types/class';
import { DomainCard } from '../../types/domain-card.type';


// EQUIPMENT STUFF
export interface EquipmentState {
  weapons: Weapon[];
  armor: Armor[];
  items: Item[];
}

export const initialEquipmentState: EquipmentState = {
  weapons: [],
  armor: [],
  items: [],
};

const onLoadWeaponsSuccess: (
  state: EquipmentState,
  action: { weapons: Weapon[] }
) => EquipmentState = (state, { weapons }) => ({ ...state, weapons });

const onLoadArmorSuccess: (
  state: EquipmentState,
  action: { armor: Armor[] }
) => EquipmentState = (state, { armor }) => ({ ...state, armor });

const onLoadItemSuccess: (
  state: EquipmentState,
  action: { items: Item[] }
) => EquipmentState = (state, { items }) => ({ ...state, items });

export const equipmentReducer = createReducer(
  initialEquipmentState,
  on(loadWeaponsSuccess, onLoadWeaponsSuccess),
  on(loadArmorSuccess, onLoadArmorSuccess),
  on(loadItemsSuccess, onLoadItemSuccess)
);


// HERITAGE STUFF
export interface HeritageState {
  ancestries: Ancestry[];
  communities: Community[];
}

export const initialHeritageState: HeritageState = {
  ancestries: [],
  communities: []
}

const onLoadAncestriesSuccess: (
  state: HeritageState,
  action: { ancestries: Ancestry[] }
) => HeritageState = (state, { ancestries }) => ({ ...state, ancestries });

const onLoadCommunitiesSuccess: (
  state: HeritageState,
  action: { communities: Community[] }
) => HeritageState = (state, { communities }) => ({ ...state, communities });

export const heritageReducer = createReducer(
  initialHeritageState,
  on(loadAncestriesSuccess, onLoadAncestriesSuccess),
  on(loadCommunitiesSuccess, onLoadCommunitiesSuccess)
);


// CLASS STUFF
export interface CharacterClassState {
  classes: CharacterClass[]
}

const initialCharacterClassState: CharacterClassState = {
  classes: []
}

const onLoadClassesSuccess: (
  state: CharacterClassState,
  action: { response: CharacterClass[] }
) => CharacterClassState = (state, { response }) => ({ ...state, classes: response });

export const characterClassReducer = createReducer(
  initialCharacterClassState,
  on(loadClassesSuccess, onLoadClassesSuccess)
);

// DOMAIN CARD STUFF
export interface DomainCardState {
  domainCards: DomainCard[]
};

const initialDomainCardState: DomainCardState = {
  domainCards: []
};

const onLoadDomainCardsSuccess: (
  state: DomainCardState,
  action: { response: DomainCard[] }
) => DomainCardState = (state, { response }) => ({...state, domainCards: response});

export const domainCardReducer = createReducer(
  initialDomainCardState,
  on(loadDomainCardsSuccess, onLoadDomainCardsSuccess)
)
