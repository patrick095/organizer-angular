import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DockModule } from '@core/components/dock/dock.module';
import { DragItemModule } from '@core/components/drag-item/drag-item.module';
import { ApiConfig } from '@core/configs/api.config';
import { ApiService } from '@features/services/api.service';

import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash.routing.module';

describe('DashComponent', () => {
    let component: DashComponent;
    let fixture: ComponentFixture<DashComponent>;
    const defaultObjects = [
        {
            id: '1',
            title: 'Item 1',
            position: { x: 0, y: 0 },
            description: 'Item 1',
            theme: 'primary',
            type: 'card',
            date: new Date(),
        },
        {
            id: '2',
            title: 'Item 2',
            position: { x: 0, y: 0 },
            description: 'Item 2',
            theme: 'primary',
            type: 'calendar',
            date: new Date(),
        },
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, DockModule, DragDropModule, DragItemModule, DashRoutingModule],
            declarations: [DashComponent],
            providers: [ApiConfig, ApiService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Deve renderizar 2 drag-itens', () => {
        component.userItems = defaultObjects;
        fixture.detectChanges();
        const dragItems = fixture.nativeElement.querySelectorAll('.drag-item');
        expect(dragItems.length).toBe(2);
    });

    it('Deve renderizar um item com position diferente do inicial', () => {
        component.userItems = [{ ...defaultObjects[0], position: { x: 10, y: 10 } }];
        component.objects = [...component.userItems];
        fixture.detectChanges();
        const dragItem = fixture.nativeElement.querySelector('.drag-item');
        expect(dragItem.style.transform).toBe('translate3d(10px, 10px, 0px)');
    });

    it('Deve renderizar um item e movê-lo usando saveChanges', () => {
        component.userItems = defaultObjects;
        component.objects = defaultObjects;
        component.saveChanges({ x: 10, y: 10 }, defaultObjects[0]);
        fixture.detectChanges();
        const dragItem = fixture.nativeElement.querySelectorAll('.drag-item');
        expect(dragItem[0].style.transform).toBe('translate3d(10px, 10px, 0px)');
        expect(dragItem[1].style.transform).toBe('translate3d(0px, 0px, 0px)');
    });
});
