import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EquipmentState } from './reducers';

export const selectEquipmentState =
  createFeatureSelector<EquipmentState>('equipment');

// WEAPONS
export const selectWeapons = createSelector(
  selectEquipmentState,
  (state) => state.weapons
);
export const selectPrimaryWeapons = createSelector(selectWeapons, (weapons) =>
  weapons.filter((weapon) => !weapon.isSecondary)
);
export const selectSecondaryWeapons = createSelector(selectWeapons, (weapons) =>
  weapons.filter((weapon) => weapon.isSecondary)
);

// ARMOR
export const selectArmor = createSelector(
  selectEquipmentState,
  (state) => state.armor
);

// ITEMS
export const selectItems = createSelector(
  selectEquipmentState,
  (state) => state.items
);
