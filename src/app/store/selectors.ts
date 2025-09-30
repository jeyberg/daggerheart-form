import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterClassState, DomainCardState, EquipmentState, HeritageState } from './reducers';
import { characterClasses, CharacterClassName } from '../../types/class';
import { DomainCard } from '../../types/domain-card.type';
import { Domain, DomainCardType } from '../../types/enums';
import { CardData } from '../../types/card-description';
import { dataToCard } from '../../helper-functions/data-to-card';

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

export const selectAncestryCards = createSelector(
  selectAncestries,
  (ancestries) =>
    ancestries.map((ancestry) => dataToCard(ancestry.name, 'ancestry', ancestry.name, ancestry.features))
);

export const selectCommunities = createSelector(
  selectHeritageState,
  (state) => state.communities
);

export const selectCommunityCards = createSelector(
  selectCommunities,
  (communities) => communities.map((community) => dataToCard(community.name, 'community', community.name, [community.feature]))
)

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

export const selectSubclassesByClass = (name: CharacterClassName) => createSelector(
  selectClass(name),
  (characterClass) => characterClass?.subclasses.map((subClass) => dataToCard(subClass.name, 'subclass', subClass.name, subClass.features))
)

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

// DOMAIN CARD
const domainCardStateSelector = createFeatureSelector<DomainCardState>('domainCard');

const selectAllDomainCards = createSelector(
  domainCardStateSelector,
  (state) => state.domainCards
);

export const selectDomainCardsByLevel = (level: number) => createSelector(
  selectAllDomainCards,
  (cards) => cards.filter((card) => card.level == level)
);

export const selectLvl1DomainCardsByDomains = (...domains: Domain[]) => createSelector(
  selectDomainCardsByLevel(1),
  (cards) => cards.filter((card) => domains.includes(card.domain))
)
