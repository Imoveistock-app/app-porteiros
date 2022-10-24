import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedPageRoutingModule } from './logged-routing.module';

import { LoggedPage } from './logged.page';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExtractComponent } from './pages/extract/extract.component';
import { IndicateComponent } from './pages/indicate/indicate.component';
import { IonMaskDirectiveLogged } from '../directives/maskLogged.directive';
import { PersonalDataComponent } from './pages/profile/components/view/personal-data/personal-data.component';
import { WorkDataComponent } from './pages/profile/components/view/work-data/work-data.component';
import { WorkFormComponent } from './pages/profile/components/forms/work-form/work-form.component';
import { PersonalFormComponent } from './pages/profile/components/forms/personal-form/personal-form.component';

@NgModule({
  
  declarations: [
    LoggedPage,
    HomeComponent,
    IonMaskDirectiveLogged,
    AboutComponent,
    PrivacyPolicyComponent,
    PropertyListComponent,
    TermsConditionsComponent,
    ToolbarComponent,
    ProfileComponent,
    ExtractComponent,
    IndicateComponent,
    PersonalDataComponent,
    PersonalFormComponent,
    WorkDataComponent,
    WorkFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoggedPageRoutingModule
  ],
  
})
export class LoggedPageModule {}
