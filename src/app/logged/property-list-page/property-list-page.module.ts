import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyListPagePageRoutingModule } from './property-list-page-routing.module';

import { PropertyListPagePage } from './property-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PropertyListPagePageRoutingModule
  ],
  declarations: [PropertyListPagePage]
})
export class PropertyListPagePageModule {}
