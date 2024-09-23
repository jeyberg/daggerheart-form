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
export type CharacterClass = (typeof characterClasses)[number];

export const bardSubclasses = ['Wordsmith', 'Troubadour'] as const;
export type BardSubclass = (typeof bardSubclasses)[number];

export const druidSubclasses = [
  'Warden of the Elements',
  'Warden of Renewal',
] as const;
export type DruidSubclass = (typeof druidSubclasses)[number];

export const guardianSubclasses = ['Stalwart', 'Vengeance'] as const;
export type GuardianSubclass = (typeof guardianSubclasses)[number];

export const rangerSubclasses = ['Wayfinder', 'Beastbound'] as const;
export type RangerSubclass = (typeof rangerSubclasses)[number];

export const rogueSubclasses = ['Syndicate', 'Nightwalker'] as const;
export type RogueSubclass = (typeof rogueSubclasses)[number];

export const seraphSubclasses = ['Winged Sentinel', 'Divine Wielder'] as const;
export type SeraphSubclass = (typeof seraphSubclasses)[number];

export const sorcererSubclasses = [
  'Primal Origin',
  'Elemental Origin',
] as const;
export type SorcererSubclass = (typeof sorcererSubclasses)[number];

export const warriorSubclasses = [
  'Call of the Slayer',
  'Call of the Brave',
] as const;
export type WarriorSubclass = (typeof warriorSubclasses)[number];

export const wizardSubclasses = [
  'School of Knowledge',
  'School of War',
] as const;
export type WizardSubclass = (typeof wizardSubclasses)[number];

export type CharacterSubclass =
  | BardSubclass
  | DruidSubclass
  | GuardianSubclass
  | RangerSubclass
  | RogueSubclass
  | SeraphSubclass
  | SorcererSubclass
  | WarriorSubclass
  | WizardSubclass;

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
