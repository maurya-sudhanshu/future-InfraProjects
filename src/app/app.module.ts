import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HumanComponent } from './human/human.component';
import { LifeComponent } from './life/life.component';
import { LearningComponent } from './learning/learning.component';
import { KeyComponent } from './key/key.component';
import { ContactComponent } from './contact/contact.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { CorporateComponent } from './corporate/corporate.component';
import { DirectorsComponent } from './directors/directors.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FinanceComponent } from './finance/finance.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { INNOVATIONComponent } from './innovation/innovation.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { MedianccComponent } from './mediancc/mediancc.component';
import { MedianewsComponent } from './medianews/medianews.component';
import { MediapressComponent } from './mediapress/mediapress.component';
import { OngoingProjectsComponent } from './ongoing-projects/ongoing-projects.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { PHILOSOPHYComponent } from './philosophy/philosophy.component';
import { PresenceComponent } from './presence/presence.component';
import { QualityComponent } from './quality/quality.component';
import { SocietalComponent } from './societal/societal.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { StockComponent } from './stock/stock.component';
import { UrbanComponent } from './urban/urban.component';
import { WaterComponent } from './water/water.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HumanComponent,
    LifeComponent,
    LearningComponent,
    HumanComponent,
    KeyComponent,
    ContactComponent,
    CompletedProjectsComponent,
    CorporateComponent,
    DirectorsComponent,
    ExpertiseComponent,
    FinanceComponent,
    FooterComponent,
    HeaderComponent,
    INNOVATIONComponent,
    LandmarksComponent,
    LifeComponent,
    MedianccComponent,
    MedianewsComponent,
    MediapressComponent,
    OngoingProjectsComponent,
    OpportunitiesComponent,
    PHILOSOPHYComponent,
    PresenceComponent,
    QualityComponent,
    SocietalComponent,
    StakeholdersComponent,
    StockComponent,
    UrbanComponent,
    WaterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
