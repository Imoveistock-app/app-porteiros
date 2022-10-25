import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { IonMaskDirective } from '../directives/mask.directive';
import { InsertTelComponent } from './pages/insert-tel/insert-tel.component';
import { LoginComponent } from './pages/login/login.component';
import { SendCodeComponent } from './pages/send-code/send-code.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SplashComponent } from './pages/splash/splash.component';
import { SwiperModule } from 'swiper/angular';
import { UserService } from '../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../service/authentication.service';

@NgModule({
  declarations: [
    AuthPage,
    IonMaskDirective,
    InsertTelComponent,
    LoginComponent,
    SendCodeComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    ReactiveFormsModule,
    AuthPageRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    AuthenticationService,
    UserService
  ]
  
})
export class AuthPageModule {}
