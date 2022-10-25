import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { SplashComponent } from './auth/pages/splash/splash.component';

const routes: Routes = [
  {
    path: 'logged',
    loadChildren: () => import('./logged/logged.module').then( m => m.LoggedPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
