import { createReducer, on } from '@ngrx/store';
import { Armor, Item, Weapon } from '../../types/items';
import { loadArmorSuccess, loadWeaponsSuccess } from './actions';

export interface EquipmentState {
  weapons: Weapon[];
  armor: Armor[];
  items: Item[];
}

export const initialState: EquipmentState = {
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
  initialState,
  on(loadWeaponsSuccess, onLoadWeaponsSuccess),
  on(loadArmorSuccess, onLoadArmorSuccess)
);
