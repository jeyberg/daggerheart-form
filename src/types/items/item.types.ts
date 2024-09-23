export const traits = [
  'Agility',
  'Strength',
  'Finesse',
  'Instinct',
  'Presence',
  'Knowledge',
] as const;
export type Trait = typeof traits;

export const ranges = [
  'Melee',
  'Very Close',
  'Close',
  'Far',
  'Very Far',
] as const;
export type WeaponRange = typeof ranges;

export const dice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'] as const;
export type Die = typeof dice;

export interface Weapon {
  isSecondary: boolean;
  name: string;
  trait: Trait;
  die: Die;
  damageModifier: number;
  isMagical: boolean;
  burden: 1 | 2;
  feature: string;
  tier: 1 | 2 | 3 | 4
}

export interface Armor {
  name: string;
  base_score: number;
  feature: string;
}
