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
import { FinfineComponent } from './components/pages/finfine/finfine.component';
import { PlatformEngineeringComponent } from './components/pages/profisea-platform-engineering/profisea-platform-engineering.component';
import { MachineLearningOperationsComponent } from './components/pages/machine-learning-operations/machine-learning-operations.component';
import { AiGenaiServicesComponent } from './components/pages/ai-genai-services/ai-genai-services.component';
import { OracleCloudPartnershipComponent } from './components/pages/oracle-cloud-partnership/oracle-cloud-partnership.component';
import { AzurePartnershipComponent } from './components/pages/azure-partnership/azure-partnership.component';
import { GcpPartnershipComponent } from './components/pages/gcp-partnership/gcp-partnership.component';
import { Stage5Component } from './components/pages/case-studies/stage5/stage5.component';
import { CynComponent } from './components/pages/case-studies/cyn/cyn.component';
import { DreemzComponent } from './components/pages/case-studies/dreemz/dreemz.component';

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
    path: 'stage5-redefines-business-automation-with-a-conversational-ai-platform-built-on-amazon-bedrock',
    component: Stage5Component
  },
  {
    path: 'cyn-ai-reinvents-predictive-cybersecurity-with-a-generative-ai-driven-brand-protection-agent-built-on-aws',
    component: CynComponent
  },
  {
    path: 'dreemz-scaling-dreams-with-aws-profiseas-devops-expertise',
    component: DreemzComponent
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
    path: 'oracle-cloud-partnership',
    component: OracleCloudPartnershipComponent
  },
  {
    path: 'azure-partnership',
    component: AzurePartnershipComponent
  },
  {
    path: 'gcp-partnership',
    component: GcpPartnershipComponent
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
    path: 'finfine',
    component: FinfineComponent
  },
  {
    path: 'profisea-platform-engineering',
    component: PlatformEngineeringComponent
  },
  {
    path: 'machine-learning-operations',
    component: MachineLearningOperationsComponent
  },
  {
    path: 'ai-genai-services',
    component: AiGenaiServicesComponent
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
