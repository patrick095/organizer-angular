import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockComponent } from './dock.component';
import { DockItemModule } from '../dock-item/dock-item.module';

@NgModule({
    declarations: [DockComponent],
    imports: [CommonModule, DockItemModule],
    exports: [DockComponent],
})
export class DockModule {}
