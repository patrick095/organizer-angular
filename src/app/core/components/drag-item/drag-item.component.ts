import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PositionInterface } from '@core/interfaces/data.interface';

@Component({
    selector: 'app-drag-item',
    templateUrl: './drag-item.component.html',
    styleUrls: ['./drag-item.component.scss'],
})
export class DragItemComponent implements OnInit {
    @Input() id: string;
    @Input() title: string;
    @Input() dragPosition: PositionInterface;
    @Output() positionChanged: EventEmitter<PositionInterface> = new EventEmitter<PositionInterface>();
    public positionToSave: PositionInterface;
    constructor() {
        this.dragPosition = { x: 0, y: 0 };
    }

    ngOnInit(): void {}

    public savePosition() {
        this.positionChanged.emit(this.positionToSave);
    }

    public showPosition(event) {
        this.positionToSave = {
            x: event.distance.x + this.dragPosition.x,
            y: event.distance.y + this.dragPosition.y,
        };
    }
}
