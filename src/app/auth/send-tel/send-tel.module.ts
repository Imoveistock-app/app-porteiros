import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendTelPageRoutingModule } from './send-tel-routing.module';

import { SendTelPage } from './send-tel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendTelPageRoutingModule
  ],
  declarations: [SendTelPage]
})
export class SendTelPageModule {}
