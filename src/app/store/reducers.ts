import { createReducer, on } from '@ngrx/store';
import { Armor, Weapon } from '../../types/items';
import { loadWeaponsSuccess } from './actions';

export interface EquipmentState {
  weapons: Weapon[];
  armor: Armor[];
}

export const initialState: EquipmentState = {
  weapons: [],
  armor: [],
};

const onLoadWeaponsSuccess: (
  state: EquipmentState,
  action: { weapons: Weapon[] }
) => EquipmentState = (state, { weapons }) => ({ ...state, weapons });

export const equipmentReducer = createReducer(
    initialState,
    on(loadWeaponsSuccess, onLoadWeaponsSuccess)
);
