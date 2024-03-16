import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PHILOSOPHYComponent } from './philosophy/philosophy.component';
import { DirectorsComponent } from './directors/directors.component';
import { PresenceComponent } from './presence/presence.component';
import { UrbanComponent } from './urban/urban.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { WaterComponent } from './water/water.component';
import { QualityComponent } from './quality/quality.component';
import { SocietalComponent } from './societal/societal.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { ContactComponent } from './contact/contact.component';
import { INNOVATIONComponent } from './innovation/innovation.component';
import { KeyComponent } from './key/key.component';
import { HumanComponent } from './human/human.component';
import { LearningComponent } from './learning/learning.component';
import { LifeComponent } from './life/life.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { FinanceComponent } from './finance/finance.component';
import { CorporateComponent } from './corporate/corporate.component';
import { StockComponent } from './stock/stock.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { MedianewsComponent } from './medianews/medianews.component';
import { MedianccComponent } from './mediancc/mediancc.component';
import { MediapressComponent } from './mediapress/mediapress.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { OngoingProjectsComponent } from './ongoing-projects/ongoing-projects.component';

const routes: Routes = [

  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'philosophy',
    component: PHILOSOPHYComponent
  },
  {
    path: 'directors',
    component: DirectorsComponent
  },
  {
    path: 'presence',
    component: PresenceComponent
  }, {
    path: 'urban',
    component: UrbanComponent
  },
  {
    path: 'expertise',
    component: ExpertiseComponent
  },
  {
    path: 'water',
    component: WaterComponent
  },
  {
    path: 'quality',
    component: QualityComponent
  },
  {
    path: 'societal',
    component: SocietalComponent
  },
  {
    path: 'landmarks',
    component: LandmarksComponent
  },
  {
    path: 'innovation',
    component: INNOVATIONComponent
  },
  {
    path: 'key',
    component: KeyComponent
  },
  {
    path: 'human',
    component: HumanComponent
  },
  {
    path: 'learning',
    component: LearningComponent
  },
  {
    path: 'life',
    component: LifeComponent
  },
  {
    path: 'opportunities',
    component: OpportunitiesComponent
  },
  {
    path: 'finance',
    component: FinanceComponent
  },
  {
    path: 'corporate',
    component: CorporateComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'stakeholders',
    component: StakeholdersComponent
  },
  {
    path: 'mediancc',
    component: MedianccComponent
  },
  {
    path: 'medianews',
    component: MedianewsComponent
  },
  {
    path: 'mediapress',
    component: MediapressComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'completed-projects',
    component: CompletedProjectsComponent
  },
  {
    path: 'ongoing-projects',
    component: OngoingProjectsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
