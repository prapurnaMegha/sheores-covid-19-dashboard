import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndiaDashboardComponent } from './india-dashboard/india-dashboard.component';
import { HelplineComponent } from './helpline/helpline.component';
import { WorldGlanceComponent } from './world-glance/world-glance.component';


export const routesConfig: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'indiadashboard',
  component: IndiaDashboardComponent
},
{
  path: 'india-helpline',
  component: HelplineComponent
},
{
  path: 'world-glance',
  component: WorldGlanceComponent
},
{
  path: '**',
  component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
