import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@core/services/auth-guard.service';
import { DashComponent } from './features/pages/dash/dash.component';
import { HomeComponent } from './features/pages/home/home.component';
import { PageNotFoundComponent } from './features/pages/page-not-found/page-not-found.component';
import { SettingsComponent } from './features/pages/settings/settings.component';
import { SigninComponent } from './features/pages/signin/signin.component';
import { SignupComponent } from './features/pages/signup/signup.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: SigninComponent },
    { path: 'cadastro', component: SignupComponent },
    { path: 'dash', component: DashComponent, canActivate: [AuthGuardService] },
    { path: 'configuracoes', component: SettingsComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
