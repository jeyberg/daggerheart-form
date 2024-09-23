import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EquipmentState } from "./reducers";

export const selectEquipmentState = createFeatureSelector<EquipmentState>('equipment');
export const selectWeapons = createSelector(
    selectEquipmentState,
    (state) => state.weapons
);

export const selectArmor = createSelector(
    selectEquipmentState,
    (state) => state.armor
);
