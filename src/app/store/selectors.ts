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
  weapons.filter((weapon) => !weapon.is_secondary)
);
export const selectSecondaryWeapons = createSelector(selectWeapons, (weapons) =>
  weapons.filter((weapon) => weapon.is_secondary)
);
export const selectPrimaryWeaponsByTier = (tier: number) =>
  createSelector(selectPrimaryWeapons, (weapons) =>
    weapons.filter((weapon) => weapon.tier == tier)
  );

export const selectSecondaryWeaponsByTier = (tier: number) =>
  createSelector(selectSecondaryWeapons, (weapons) =>
    weapons.filter((weapon) => weapon.tier == tier)
  );

// ARMOR
export const selectArmor = createSelector(
  selectEquipmentState,
  (state) => state.armor
);

export const selectArmorByTier = (tier: number) => createSelector(
  selectArmor,
  (armor) => armor.filter((armorPiece) => armorPiece.tier == tier)
)

// ITEMS
export const selectItems = createSelector(
  selectEquipmentState,
  (state) => state.items
);

export const selectStartingItems = createSelector(selectItems, (items) =>
  items.filter((item) => item.isStartingItem)
);
