import { Armor, Die, Item, Trait, Weapon } from '../types/items';

// WEAPONS
const generateWeapons = (
  amount: number,
  isSecondary: boolean,
  isMagical: boolean,
  tier: 1 | 2 | 3 | 4 = 1
): Weapon[] => {
  const weapons: Weapon[] = [];
  for (let index = 0; index < amount; index++) {
    weapons.push({
      isSecondary,
      name: `${isSecondary ? 'Secondary' : 'Primary'} ${
        isMagical ? 'magical' : 'physical'
      } sword ${index}`,
      trait: 'Strength' as unknown as Trait,
      die: 'd8' as unknown as Die,
      damageModifier: 1,
      isMagical,
      burden: 1,
      feature: 'Looks new and shiny',
      tier,
    });
  }
  return weapons;
};

export const dummyPrimaryPhysicalWeapons: Weapon[] = generateWeapons(
  3,
  false,
  false
);
export const dummyPrimaryMagicalWeapons: Weapon[] = generateWeapons(
  3,
  false,
  true
);
export const dummySecondaryWeapons: Weapon[] = generateWeapons(3, true, false);
export const dummyT1Weapons: Weapon[] = [
  ...dummyPrimaryPhysicalWeapons,
  ...dummyPrimaryMagicalWeapons,
  ...dummySecondaryWeapons,
];

// ARMOR
const generateArmor = (amount: number, tier: 1 | 2 | 3 | 4 = 1): Armor[] => {
  const armor: Armor[] = [];
  for (let index = 0; index < amount; index++) {
    armor.push({
      name: 'Armor ' + index,
      baseScore: index,
      tier,
      feature: 'new and shiny armor',
    });
  }

  return armor;
};

export const dummyT1Armor = generateArmor(4);

// ITEMS
const generateItems = (amount: number): Item[] => ([] as Item[]).fill({ name: 'item', feature: 'cool item'}, 0, amount-1);

export const dummyItems = generateItems(2);
