import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { SplashPagePageRoutingModule } from './splash-page-routing.module';

import { SplashPagePage } from './splash-page.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SplashPagePageRoutingModule,
  ],
  declarations: [SplashPagePage]
})
export class SplashPagePageModule {}
