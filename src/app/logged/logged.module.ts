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

@NgModule({
  
  declarations: [
    LoggedPage,
    HomeComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    PropertyListComponent,
    TermsConditionsComponent
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
