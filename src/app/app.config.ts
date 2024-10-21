import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { EquipmentEffects, HeritageEffects } from './store/effects';
import { equipmentReducer, heritageReducer } from './store/reducers';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideEffects(EquipmentEffects, HeritageEffects),
    provideState({ name: 'equipment', reducer: equipmentReducer }),
    provideState({ name: 'heritage', reducer: heritageReducer}),
    provideHttpClient(),
  ],
};
