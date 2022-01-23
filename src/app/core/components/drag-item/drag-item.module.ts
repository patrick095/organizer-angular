import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragItemComponent } from './drag-item.component';

@NgModule({
    declarations: [DragItemComponent],
    imports: [CommonModule, DragDropModule],
    exports: [DragItemComponent],
})
export class DragItemModule {}
