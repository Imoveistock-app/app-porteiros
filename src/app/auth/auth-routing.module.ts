import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { InsertTelComponent } from './pages/insert-tel/insert-tel.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'insert-tel',
        component: InsertTelComponent, 
      },
      {
        path: 'send-tel',
        component: LoginComponent, 
      },
      {
        path: 'sign-up',
        component: LoginComponent, 
      },
      {
        path: 'splash',
        component: LoginComponent, 
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
