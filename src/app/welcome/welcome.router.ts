import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SplashComponent } from "../auth/pages/splash/splash.component";
import { WelcomeComponent } from "./welcome.component";

const routes: Routes = [
    {
        path: '',
        component: SplashComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WelcomeRouterModule { }