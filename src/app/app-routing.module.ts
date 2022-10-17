import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./logged/property-list-page/property-list-page.module').then( m => m.PropertyListPagePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./auth/splash-page/splash-page.module').then( m => m.SplashPagePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./logged/about-page/about-page.module').then( m => m.AboutPagePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./logged/privacy-policy-page/privacy-policy-page.module').then( m => m.PrivacyPolicyPagePageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./logged/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'property-list',
    loadChildren: () => import('./logged/property-list-page/property-list-page.module').then( m => m.PropertyListPagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./logged/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
