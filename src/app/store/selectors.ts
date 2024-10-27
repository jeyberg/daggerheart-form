import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterClassState, EquipmentState, HeritageState } from './reducers';
import { characterClasses, CharacterClassName } from '../../types/class';

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

export const selectArmorByTier = (tier: number) =>
  createSelector(selectArmor, (armor) =>
    armor.filter((armorPiece) => armorPiece.tier == tier)
  );

// ITEMS
export const selectItems = createSelector(
  selectEquipmentState,
  (state) => state.items
);

export const selectStartingItems = createSelector(selectItems, (items) =>
  items.filter((item) => item.isStartingItem)
);

// HERITAGE
export const selectHeritageState =
  createFeatureSelector<HeritageState>('heritage');

export const selectAncestries = createSelector(
  selectHeritageState,
  (state) => state.ancestries
);

export const selectCommunities = createSelector(
  selectHeritageState,
  (state) => state.communities
);

// CLASS
export const selectCharacterClassState =
  createFeatureSelector<CharacterClassState>('characterClasses');

export const selectAllClasses = createSelector(
  selectCharacterClassState,
  (state) => state.classes
);

export const selectCharacterClassNames = createSelector(
  selectAllClasses,
  (characterClasses) =>
    characterClasses.map((characterClass) => characterClass.name)
);

export const selectCharacterSubclassesNames = (className: CharacterClassName) =>
  createSelector(selectAllClasses, (characterClasses) =>
    characterClasses
      .find((characterClass) => characterClass.name == className)
      ?.subclasses.map((subclass) => subclass.name)
  );

export const selectClassStartingItems = (className: CharacterClassName) =>
  createSelector(
    selectAllClasses,
    (classes) =>
      classes.find((characterClass) => characterClass.name == className)
        ?.items || []
  );
