import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@core/services/auth-guard.service';
import { DashComponent } from './dash.component';

const routes: Routes = [
    {
        path: '',
        component: DashComponent,
        canActivate: [AuthGuardService],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashRoutingModule {}
