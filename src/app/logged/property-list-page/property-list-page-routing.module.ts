import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyListPagePage } from './property-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyListPagePageRoutingModule {}
