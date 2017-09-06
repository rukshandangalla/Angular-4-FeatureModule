import { RouterModule, Routes } from '@angular/router';

import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailComponent } from './characters-details/charactes-details.component';

const appRoutes: Routes = [
    { path: 'characters', component: CharactersListComponent },
    { path: 'character/:id', component: CharactersDetailComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);