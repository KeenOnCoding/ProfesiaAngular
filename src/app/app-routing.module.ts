import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DevopsComponent } from './components/pages/devops/devops.component';
import { CloudMigrationComponent } from './components/pages/cloud-migration/cloud-migration.component';

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
    //loadChildren: () => import('./components/pages/devops/devops.component').then(m => m.DevopsComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
