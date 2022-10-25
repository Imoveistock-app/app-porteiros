import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';
import { IonicModule } from '@ionic/angular';

import { LoggedPageRoutingModule } from './logged-routing.module';

import { LoggedPage } from './logged.page';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExtractComponent } from './pages/extract/extract.component';
import { IndicateComponent } from './pages/indicate/indicate.component';
import { IonMaskDirectiveLogged } from '../directives/maskLogged.directive';
import { CepService } from '../service/cep.service';
import { HttpClientModule } from '@angular/common/http';
import { PropertyIndicationService } from '../service/property-indication.service';
import { UserService } from '../service/user.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PersonalDataComponent } from './pages/profile/components/view/personal-data/personal-data.component';
import { WorkDataComponent } from './pages/profile/components/view/work-data/work-data.component';
import { WorkFormComponent } from './pages/profile/components/forms/work-form/work-form.component';
import { PersonalFormComponent } from './pages/profile/components/forms/personal-form/personal-form.component';

registerLocaleData(ptBr);

@NgModule({
  
  declarations: [
    LoggedPage,
    HomeComponent,
    IonMaskDirectiveLogged,
    AboutComponent,
    PrivacyPolicyComponent,
    PropertyListComponent,
    TermsConditionsComponent,
    ToolbarComponent,
    ProfileComponent,
    ExtractComponent,
    IndicateComponent,
    PersonalDataComponent,
    PersonalFormComponent,
    WorkDataComponent,
    WorkFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoggedPageRoutingModule,
    HttpClientModule,
    CurrencyMaskModule,
  ],
  providers: [
    CepService,
    PropertyIndicationService,
    UserService,
    { provide: LOCALE_ID, useValue: 'pt' },
  ]
  
})
export class LoggedPageModule {}
