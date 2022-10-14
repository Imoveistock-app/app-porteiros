import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyPagePageRoutingModule } from './privacy-policy-page-routing.module';

import { PrivacyPolicyPagePage } from './privacy-policy-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPolicyPagePageRoutingModule
  ],
  declarations: [PrivacyPolicyPagePage]
})
export class PrivacyPolicyPagePageModule {}
