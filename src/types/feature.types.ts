import { CharacterClass, CharacterSubclass } from './class';
import { Ancestry, Community } from './heritage';
import { Armor, Item, Weapon } from './items';

export interface Feature {
  id: number;
  name?: string;
  description: string;
  effects: string[];
  appendix?: string;

  community?: Community;
  ancestry?: Ancestry;
  ancestryId?: string;
  item?: Item;
  weapon?: Weapon;
  class?: CharacterClass;
  classId?: string;
  subClass?: CharacterSubclass;
  subClassId?: string;
  armor?: Armor;
}
