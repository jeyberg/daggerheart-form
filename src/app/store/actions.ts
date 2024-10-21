import { createAction, props } from '@ngrx/store';
import { Armor, Item, Weapon } from '../../types/items';
import { Ancestry, Community } from '../../types/heritage';

// FORM STUFF
const FORM_ACTION_CATEGORY = '[FORM] ';
export const FORM_LOADED = FORM_ACTION_CATEGORY + 'Loaded';

export const formLoaded = createAction(FORM_LOADED);

// WEAPON STUFF
const WEAPONS_ACTION_CATEGORY = '[WEAPONS] ';
export const LOAD_WEAPONS = WEAPONS_ACTION_CATEGORY + 'Load';
export const LOAD_WEAPONS_SUCCESS = WEAPONS_ACTION_CATEGORY + 'Load Success';
export const LOAD_WEAPONS_FAIL = WEAPONS_ACTION_CATEGORY + 'Load Fail';

export const loadWeapons = createAction(LOAD_WEAPONS);
export const loadWeaponsSuccess = createAction(
  LOAD_WEAPONS_SUCCESS,
  props<{ weapons: Weapon[] }>()
);
export const loadWeaponsFail = createAction(LOAD_WEAPONS_FAIL);

// ARMOR STUFF
const ARMOR_ACTION_CATEGORY = '[ARMOR] ';
export const LOAD_ARMOR = ARMOR_ACTION_CATEGORY + 'Load';
export const LOAD_ARMOR_SUCCESS = ARMOR_ACTION_CATEGORY + 'Load Success';
export const LOAD_ARMOR_FAIL = ARMOR_ACTION_CATEGORY + 'Load Fail';

export const loadArmor = createAction(LOAD_ARMOR);
export const loadArmorSuccess = createAction(
  LOAD_ARMOR_SUCCESS,
  props<{ armor: Armor[] }>()
);
export const loadArmorFail = createAction(LOAD_ARMOR_FAIL);

// ITEM STUFF
const ITEMS_ACTION_CATEGORY = '[ITEM] ';
export const LOAD_ITEMS = ITEMS_ACTION_CATEGORY + 'Load';
export const LOAD_ITEMS_SUCCESS = ITEMS_ACTION_CATEGORY + 'Load Success';
export const LOAD_ITEMS_FAIL = ITEMS_ACTION_CATEGORY + 'Load Fail';

export const loadItems = createAction(LOAD_ITEMS);
export const loadItemsSuccess = createAction(
  LOAD_ITEMS_SUCCESS,
  props<{ items: Item[] }>()
);
export const loadItemsFail = createAction(LOAD_ITEMS_FAIL);

// ANCESTRY STUFF
const ANCESTRIES_ACTION_CATEGORY = '[ANCESTRY] ';
export const LOAD_ANCESTRIES = ANCESTRIES_ACTION_CATEGORY + 'Load';
export const LOAD_ANCESTRIES_SUCCESS = ANCESTRIES_ACTION_CATEGORY + 'Load Success';
export const LOAD_ANCESTRIES_FAIL = ANCESTRIES_ACTION_CATEGORY + 'Load Fail';

export const loadAncestries = createAction(LOAD_ANCESTRIES);
export const loadAncestriesSuccess = createAction(
  LOAD_ANCESTRIES_SUCCESS,
  props<{ ancestries: Ancestry[] }>()
);
export const loadAncestriesFail = createAction(LOAD_ANCESTRIES_FAIL);

// COMMUNITY STUFF
const COMMUNITIES_ACTION_CATEGORY = '[COMMUNITY] ';
export const LOAD_COMMUNITIES = COMMUNITIES_ACTION_CATEGORY + 'Load';
export const LOAD_COMMUNITIES_SUCCESS = COMMUNITIES_ACTION_CATEGORY + 'Load Success';
export const LOAD_COMMUNITIES_FAIL = COMMUNITIES_ACTION_CATEGORY + 'Load Fail';

export const loadCommunities = createAction(LOAD_COMMUNITIES);
export const loadCommunitiesSuccess = createAction(
  LOAD_COMMUNITIES_SUCCESS,
  props<{ communities: Community[] }>()
);
export const loadCommunitiesFail = createAction(LOAD_COMMUNITIES_FAIL);