import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SwiperModule } from "swiper/angular";
import { SplashComponent } from "../auth/pages/splash/splash.component";
import { WelcomeComponent } from "./welcome.component";
import { WelcomeRouterModule } from "./welcome.router";

@NgModule({
    declarations: [
        WelcomeComponent,
        SplashComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SwiperModule,
        ReactiveFormsModule,
        WelcomeRouterModule,
        HttpClientModule,
    ],
    providers: []

})
export class WelcomeModule { }