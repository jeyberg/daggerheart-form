import { Injectable } from '@angular/core';
import { EquipmentService } from '../equipment.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  FORM_LOADED,
  loadArmorFail,
  loadArmorSuccess,
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
        this.equipmentService.getT1Weapons().pipe(
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
        this.equipmentService.getT1Armor().pipe(
          map((armor) => loadArmorSuccess({ armor })),
          catchError(() => of(loadArmorFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private equipmentService: EquipmentService
  ) {}
}
