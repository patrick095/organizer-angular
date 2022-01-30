import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./features/pages/home/home.module').then((m) => m.HomeModule) },
    { path: 'entrar', loadChildren: () => import('./features/pages/signin/signin.module').then((m) => m.SigninModule) },
    { path: 'cadastrar', loadChildren: () => import('./features/pages/signup/signup.module').then((m) => m.SignupModule) },
    { path: 'dash', loadChildren: () => import('./features/pages/dash/dash.module').then((m) => m.DashModule) },
    { path: 'configuracoes', loadChildren: () => import('./features/pages/settings/settings.module').then((m) => m.SettingsModule) },
    {
        path: '**',
        loadChildren: () => import('./features/pages/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
