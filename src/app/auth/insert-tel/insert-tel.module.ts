import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertTelPageRoutingModule } from './insert-tel-routing.module';

import { InsertTelPage } from './insert-tel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertTelPageRoutingModule
  ],
  declarations: [InsertTelPage]
})
export class InsertTelPageModule {}
