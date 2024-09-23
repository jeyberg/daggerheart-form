import { Die, Trait, Weapon } from '../types/items';

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
      name: 'Weapon ' + index,
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
