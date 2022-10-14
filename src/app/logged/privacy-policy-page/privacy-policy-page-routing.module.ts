import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyPolicyPagePage } from './privacy-policy-page.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyPolicyPagePageRoutingModule {}
