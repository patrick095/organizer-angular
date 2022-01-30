import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DockModule } from '@core/components/dock/dock.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragItemModule } from '@core/components/drag-item/drag-item.module';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash.routing.module';

@NgModule({
    declarations: [DashComponent],
    imports: [CommonModule, RouterModule, DockModule, DragDropModule, DragItemModule, DashRoutingModule],
    exports: [DashComponent],
})
export class DashModule {}
