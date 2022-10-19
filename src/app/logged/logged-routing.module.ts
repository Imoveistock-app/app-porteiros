import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedPage } from './logged.page';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedPage,
    children: [
      {
        path: 'home',
        component: HomeComponent, 
      },
      {
        path: 'about',
        component: AboutComponent, 
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent, 
      },
      
      {
        path: 'property-list',
        component: PropertyListComponent, 
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent, 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedPageRoutingModule {}
