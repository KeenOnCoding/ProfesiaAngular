import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DevopsComponent } from './components/pages/devops/devops.component';
import { CloudMigrationComponent } from './components/pages/cloud-migration/cloud-migration.component';
import { WellArchitectedComponent } from './components/pages/well-architected/well-architected.component';
import { FinopsComponent } from './components/pages/finops/finops.component';
import { DevsecopsComponent } from './components/pages/devsecops/devsecops.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'devops',
    component: DevopsComponent
    //loadChildren: () => import('./components/pages/devops/devops.component').then(m => m.DevopsComponent)
  },
  {
    path: 'cloud-migration',
    component: CloudMigrationComponent
  },
  {
    path: 'well-architected',
    component: WellArchitectedComponent
  },
  {
    path: 'finops-as-service',
    component: FinopsComponent
  },
  {
    path: 'devsecops-as-a-service',
    component: DevsecopsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
