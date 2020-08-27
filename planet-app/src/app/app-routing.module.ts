import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetDetailComponent } from './planet-detail/planet-detail.component'
import { PlanetsCreateComponent } from './planets-create/planets-create.component'
import { PlanetsListComponent } from './planets-list/planets-list.component'

const routes: Routes = [
  { path: 'planet-detail', component:PlanetDetailComponent},
  { path: 'planets-create', component:PlanetsCreateComponent},
  { path: 'planets-list', component:PlanetsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
