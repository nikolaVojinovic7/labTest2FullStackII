import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MissionlistComponent} from './missionlist/missionlist.component';
import {MissiondetailsComponent} from './missiondetails/missiondetails.component';

const routes: Routes = [
  {path: 'mission-list', component: MissionlistComponent},
  {path: 'mission-details/:flight-number', component: MissiondetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
