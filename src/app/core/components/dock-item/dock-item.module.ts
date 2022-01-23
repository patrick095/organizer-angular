import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DockItemComponent } from './dock-item.component';

@NgModule({
    declarations: [DockItemComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [DockItemComponent],
})
export class DockItemModule {}
