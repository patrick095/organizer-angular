import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DockModule } from '@core/components/dock/dock.module';
import { DashComponent } from './dash.component';

@NgModule({
    declarations: [DashComponent],
    imports: [CommonModule, RouterModule, DockModule],
})
export class DashModule {}
