import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendTelPage } from './send-tel.page';

const routes: Routes = [
  {
    path: '',
    component: SendTelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendTelPageRoutingModule {}
