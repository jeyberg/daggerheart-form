import { Injectable } from '@angular/core';
import { EquipmentService } from '../equipment.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  FORM_LOADED,
  loadArmorFail,
  loadArmorSuccess,
  loadItemsFail,
  loadItemsSuccess,
  loadWeaponsFail,
  loadWeaponsSuccess,
} from './actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class EquipmentEffects {
  loadT1Weapons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FORM_LOADED),
      exhaustMap(() =>
        this.equipmentService.getWeaponsByTier(1).pipe(
          map((weapons) => loadWeaponsSuccess({ weapons })),
          catchError(() => of(loadWeaponsFail()))
        )
      )
    )
  );

  loadT1Armor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FORM_LOADED),
      exhaustMap(() =>
        this.equipmentService.getArmorByTier(1).pipe(
          map((armor) => loadArmorSuccess({ armor })),
          catchError(() => of(loadArmorFail()))
        )
      )
    )
  );

  loadStartingItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FORM_LOADED),
      exhaustMap(() =>
        this.equipmentService.getStartingItems().pipe(
          map((items) => loadItemsSuccess({ items })),
          catchError(() => of(loadItemsFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private equipmentService: EquipmentService
  ) {}
}
