import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterCreationContainerComponent } from './character-creation/character-creation-container/character-creation-container.component';
import { SheetOverviewComponent } from './home/sheet-overview/sheet-overview.component';

export const routes: Routes = [
    { path: '', component: SheetOverviewComponent },
    { path: 'character-creation', component: CharacterCreationContainerComponent}
];
