import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ApiConfig } from '@core/configs/api.config';
import { AuthGuardService } from '@core/services/auth-guard.service';

import { HomeModule } from '@features/pages/home/home.module';
import { ApiService } from '@features/services/api.service';
import { SigninModule } from '@features/pages/signin/signin.module';
import { SignupModule } from '@features/pages/signup/signup.module';
import { SettingsModule } from '@features/pages/settings/settings.module';
import { PageNotFoundModule } from '@features/pages/page-not-found/page-not-found.module';
import { DashModule } from '@features/pages/dash/dash.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './features/pages/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        SigninModule,
        SignupModule,
        SettingsModule,
        PageNotFoundModule,
        DashModule,
        FontAwesomeModule,
    ],
    providers: [
        ApiService,
        ApiConfig,
        AuthGuardService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
