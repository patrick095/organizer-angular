import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashComponent } from './dash.component';

@NgModule({
    declarations: [
        DashComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
export class DashModule { }
