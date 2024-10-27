import { Domain, Trait } from "../enums";
import { Feature } from "../feature.types";
import { Item } from "../items";

// CLASSES AND SUBCLASSES
export const characterClasses = [
  'Bard',
  'Druid',
  'Guardian',
  'Ranger',
  'Rogue',
  'Seraph',
  'Sorcerer',
  'Warrior',
  'Wizard',
] as const;
export type CharacterClassName = (typeof characterClasses)[number];

export interface CharacterClass {
  name: CharacterClassName;
  subclasses: CharacterSubClass[];
  domains: Domain[];
  evasionScore: number;
  majorThreshold: number;
  severThreshold: number;
  items: Item[];
  features: Feature[];
  backgroundQuestions: string[];
  connections: string[];
}

export interface CharacterSubClass {
  originClass: CharacterClassName;
  name: CharacterSubclassName;
  spellcastTrait?: Trait;
  features: Feature[];
}

export const bardSubclasses = ['Wordsmith', 'Troubadour'] as const;
export type BardSubclassName = (typeof bardSubclasses)[number];

export const druidSubclasses = [
  'Warden of the Elements',
  'Warden of Renewal',
] as const;
export type DruidSubclassName = (typeof druidSubclasses)[number];

export const guardianSubclasses = ['Stalwart', 'Vengeance'] as const;
export type GuardianSubclassName = (typeof guardianSubclasses)[number];

export const rangerSubclasses = ['Wayfinder', 'Beastbound'] as const;
export type RangerSubclassName = (typeof rangerSubclasses)[number];

export const rogueSubclasses = ['Syndicate', 'Nightwalker'] as const;
export type RogueSubclassName = (typeof rogueSubclasses)[number];

export const seraphSubclasses = ['Winged Sentinel', 'Divine Wielder'] as const;
export type SeraphSubclassName = (typeof seraphSubclasses)[number];

export const sorcererSubclasses = [
  'Primal Origin',
  'Elemental Origin',
] as const;
export type SorcererSubclassName = (typeof sorcererSubclasses)[number];

export const warriorSubclasses = [
  'Call of the Slayer',
  'Call of the Brave',
] as const;
export type WarriorSubclassName = (typeof warriorSubclasses)[number];

export const wizardSubclasses = [
  'School of Knowledge',
  'School of War',
] as const;
export type WizardSubclassName = (typeof wizardSubclasses)[number];

export type CharacterSubclassName =
  | BardSubclassName
  | DruidSubclassName
  | GuardianSubclassName
  | RangerSubclassName
  | RogueSubclassName
  | SeraphSubclassName
  | SorcererSubclassName
  | WarriorSubclassName
  | WizardSubclassName;

export const classToSubclassMap = {
  Bard: { opt1: bardSubclasses[0], opt2: bardSubclasses[1] },
  Druid: { opt1: druidSubclasses[0], opt2: druidSubclasses[1] },
  Guardian: { opt1: guardianSubclasses[0], opt2: guardianSubclasses[1] },
  Ranger: { opt1: rangerSubclasses[0], opt2: rangerSubclasses[1] },
  Rogue: { opt1: rogueSubclasses[0], opt2: rogueSubclasses[1] },
  Seraph: { opt1: seraphSubclasses[0], opt2: seraphSubclasses[1] },
  Sorcerer: { opt1: sorcererSubclasses[0], opt2: sorcererSubclasses[1] },
  Warrior: { opt1: warriorSubclasses[0], opt2: warriorSubclasses[1] },
  Wizard: { opt1: wizardSubclasses[0], opt2: wizardSubclasses[1] },
};
