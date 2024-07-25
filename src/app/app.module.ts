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
    BlogComponent
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
