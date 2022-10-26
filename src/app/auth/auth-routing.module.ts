import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { InsertTelComponent } from './pages/insert-tel/insert-tel.component';
import { LoginComponent } from './pages/login/login.component';
import { SendCodeComponent } from './pages/send-code/send-code.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

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
        path: 'login',
        component: LoginComponent, 
      },
      {
        path: 'send-code',
        component: SendCodeComponent, 
      },
      {
        path: 'send-tel',
        component: SendCodeComponent, 
      },
      {
        path: 'sign-up',
        component: SignUpComponent, 
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
