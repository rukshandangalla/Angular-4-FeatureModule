import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailComponent } from './characters-details/charactes-details.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleSelectionDirective } from './vehicle-selection.directive';
import { VehicleSortingPipe } from "./vehicle-sorting.pipe";

import { UserProfileService } from "./services/user-profile.service";
import { VehicleService } from "./services/vehicle.service";
import { LoggerService } from "./services/logger.service";

import { SharedModule } from "./shared/shared.module";
import { AppRouting } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,

    CharactersListComponent,
    CharactersDetailComponent,

    VehicleListComponent,
    VehicleSelectionDirective,
    VehicleSortingPipe
  ],
  imports: [
    AppRouting,
    BrowserModule, SharedModule
  ],
  providers: [
    LoggerService,
    VehicleService,
    UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
