import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DevopsComponent } from './components/pages/devops/devops.component';
import { CloudMigrationComponent } from './components/pages/cloud-migration/cloud-migration.component';
import { WellArchitectedComponent } from './components/pages/well-architected/well-architected.component';
import { FinopsComponent } from './components/pages/finops/finops.component';
import { DevsecopsComponent } from './components/pages/devsecops/devsecops.component';
import { CaseStudiesComponent } from './components/pages/case-studies/case-studies.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { AwsPartnershipComponent } from './components/pages/aws-partnership/aws-partnership.component';
import { TechnologyStackComponent } from './components/pages/technology-stack/technology-stack.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

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
  {
    path: 'case-studies',
    component: CaseStudiesComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'aws-partnership',
    component: AwsPartnershipComponent
  },
  {
    path: 'technology-stack',
    component: TechnologyStackComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
