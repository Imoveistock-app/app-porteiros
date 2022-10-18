import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'logged',
    loadChildren: () => import('./logged/logged.module').then( m => m.LoggedPageModule)
  },
  // {
  //   path: 'splash',
  //   loadChildren: () => import('./auth/splash-page/splash-page.module').then( m => m.SplashPagePageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./logged/about-page/about-page.module').then( m => m.AboutPagePageModule)
  // },
  // {
  //   path: 'privacy-policy',
  //   loadChildren: () => import('./logged/privacy-policy-page/privacy-policy-page.module').then( m => m.PrivacyPolicyPagePageModule)
  // },
  // {
  //   path: 'terms-conditions',
  //   loadChildren: () => import('./logged/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  // },
  // {
  //   path: 'property-list',
  //   loadChildren: () => import('./logged/property-list-page/property-list-page.module').then( m => m.PropertyListPagePageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./logged/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'sign-up',
  //   loadChildren: () => import('./auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  // },
  // {
  //   path: 'insert-tel',
  //   loadChildren: () => import('./auth/insert-tel/insert-tel.module').then( m => m.InsertTelPageModule)
  // },
  // {
  //   path: 'send-code',
  //   loadChildren: () => import('./auth/send-code/send-code.module').then( m => m.SendCodePageModule)
  // },
  // {
  //   path: 'logged',
  //   loadChildren: () => import('./logged/logged.module').then( m => m.LoggedPageModule)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
