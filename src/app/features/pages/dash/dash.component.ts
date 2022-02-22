import { Component, OnInit } from '@angular/core';
import { DataObject } from '@core/interfaces/data.interface';
import { ApiService } from '@features/services/api.service';

@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {
    public userItems: Array<DataObject>;
    public objects: Array<DataObject>;
    private token: string;
    private userId: string;

    constructor(private api: ApiService) {
        this.userItems = [];
        const cookie = document.cookie.match(/token=([^;]+)/);
        this.token = cookie ? cookie[1] : '';
    }

    ngOnInit(): void {
        this.api.getItems(this.token).subscribe((items) => {
            this.userItems = items.objects;
            this.userId = items.userId;
            this.objects = [...this.userItems];
        });
    }

    public saveChanges(event: any, item: any) {
        const index = this.objects.findIndex((i) => i.id === item.id);
        this.objects[index] = { ...item, position: event };
        this.api.updateItems(this.token, { userId: this.userId, object: this.objects[index] });
    }
}
