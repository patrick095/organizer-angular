import { Component, Input, OnInit } from '@angular/core';
import { IconList } from '@core/enum/icon-list.enum';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCog, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-dock-item',
    templateUrl: './dock-item.component.html',
    styleUrls: ['./dock-item.component.scss'],
})
export class DockItemComponent implements OnInit {
    @Input() id: number;
    @Input() title: string;
    @Input() icon: string;
    @Input() bgColor: string;
    @Input() iconColor: string;
    @Input() spin: boolean;
    @Input() customClass: string;
    public icons: Array<IconDefinition>;
    public startSpin: boolean;

    constructor() {
        this.icons = [];
        this.setIcons();
        this.iconColor = '#fff';
        this.spin = false;
        this.customClass = '';
        this.startSpin = false;
    }

    ngOnInit(): void {}

    public setIcons(): void {
        const iconList = [faPlus, faUser, faCog];
        this.icons.push(...iconList);
    }

    public get Icon(): IconDefinition {
        return this.icons[IconList[this.icon]];
    }
}
