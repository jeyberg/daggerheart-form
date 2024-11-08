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
  weapons.filter((weapon) => !weapon.isSecondary)
);
export const selectSecondaryWeapons = createSelector(selectWeapons, (weapons) =>
  weapons.filter((weapon) => weapon.isSecondary)
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

export const selectClass = (name: CharacterClassName) => createSelector(
  selectAllClasses,
  (classes) =>
    classes.find((characterClass) => characterClass.name == name)
);

export const selectCharacterClassNames = createSelector(
  selectAllClasses,
  (characterClasses) =>
    characterClasses.map((characterClass) => characterClass.name)
);

export const selectCharacterSubclassesNames = (name: CharacterClassName) =>
  createSelector(
    selectClass(name),
    (characterClass) => characterClass?.subclasses.map((subClass) => subClass.name) || []
  );

export const selectClassStartingItems = (name: CharacterClassName) =>
  createSelector(
    selectClass(name),
    (characterClass) => characterClass?.items || []
  );

export const selectBackgroundQuestionsByClass = (name: CharacterClassName) => createSelector(
  selectClass(name),
  (characterClass) => characterClass?.backgroundQuestions
);
