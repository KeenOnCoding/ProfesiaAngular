import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptService } from './services/script.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DevopsComponent } from './components/pages/devops/devops.component';
import { CloudMigrationComponent } from './components/pages/cloud-migration/cloud-migration.component';
import { WellArchitectedComponent } from './components/pages/well-architected/well-architected.component';
import { DevsecopsComponent } from './components/pages/devsecops/devsecops.component';
import { FinopsComponent } from './components/pages/finops/finops.component';
import { CaseStudiesComponent } from './components/pages/case-studies/case-studies.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AwsPartnershipComponent } from './components/pages/aws-partnership/aws-partnership.component';
import { TechnologyStackComponent } from './components/pages/technology-stack/technology-stack.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    DevopsComponent,
    CloudMigrationComponent,
    WellArchitectedComponent,
    DevsecopsComponent,
    FinopsComponent,
    CaseStudiesComponent,
    BlogComponent,
    AboutComponent,
    AwsPartnershipComponent,
    TechnologyStackComponent,
    CareersComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
