import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterCreationContainerComponent } from './character-creation/character-creation-container/character-creation-container.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'character-creation', component: CharacterCreationContainerComponent}
];
