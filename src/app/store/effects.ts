import { Injectable } from '@angular/core';
import { EquipmentService } from '../services/equipment.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  FORM_LOADED,
  loadAncestriesFail,
  loadAncestriesSuccess,
  loadArmorFail,
  loadArmorSuccess,
  loadClassesFail,
  loadClassesSuccess,
  loadCommunitiesFail,
  loadCommunitiesSuccess,
  loadItemsFail,
  loadItemsSuccess,
  loadWeaponsFail,
  loadWeaponsSuccess,
} from './actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { HeritageService } from '../services/heritage.service';
import { CharacterClassService } from '../services/character-class.service';

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

@Injectable()
export class HeritageEffects {
  loadAllAncestries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FORM_LOADED),
      exhaustMap(() =>
        this.heritageService.getAllAncestries().pipe(
          map((ancestries) => loadAncestriesSuccess({ ancestries })),
          catchError(() => of(loadAncestriesFail()))
        )
      )
    )
  );

  loadAllCommunities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FORM_LOADED),
      exhaustMap(() =>
        this.heritageService.getAllCommunities().pipe(
          map((communities) => loadCommunitiesSuccess({ communities })),
          catchError(() => of(loadCommunitiesFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private heritageService: HeritageService
  ) {}
}

@Injectable()
export class CharacterClassEffects {
  loadAllClasses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FORM_LOADED),
      exhaustMap(() =>
        this.characterClassService.getAllClasses().pipe(
          map((response) => loadClassesSuccess({ response })),
          catchError(() => of(loadClassesFail()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private characterClassService: CharacterClassService
  ) {}
}
