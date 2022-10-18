import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertTelPage } from './insert-tel.page';

const routes: Routes = [
  {
    path: '',
    component: InsertTelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertTelPageRoutingModule {}
