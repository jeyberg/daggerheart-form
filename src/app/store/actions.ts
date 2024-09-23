import { createAction, props } from '@ngrx/store';
import { Weapon } from '../../types/items';

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
export const loadWeaponsSuccess = createAction(LOAD_WEAPONS_SUCCESS, props<{ weapons: Weapon[] }>());
export const loadWeaponsFail = createAction(LOAD_WEAPONS_FAIL);