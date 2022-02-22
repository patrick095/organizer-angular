/* eslint-disable @typescript-eslint/indent */
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { DockModule } from '@core/components/dock/dock.module';
import { DragItemModule } from '@core/components/drag-item/drag-item.module';
import { ApiConfig } from '@core/configs/api.config';
import { ApiService } from '@features/services/api.service';

import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash.routing.module';

fdescribe('DashComponent', () => {
    let component: DashComponent;
    let fixture: ComponentFixture<DashComponent>;
    let httpMock: HttpTestingController;
    let injector: TestBed;
    const config = new ApiConfig();
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

    function getResponse() {
        const req = httpMock.expectOne(`${config.baseUrl}/auth/get-objects`);
        expect(req.request.method).toBe('POST');
        req.flush({ userId: '1', objects: defaultObjects });
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DockModule, DragDropModule, DragItemModule, DashRoutingModule, HttpClientTestingModule],
            declarations: [DashComponent],
            providers: [ApiConfig, ApiService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        injector = getTestBed();
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should create', () => {
        getResponse();
        expect(component).toBeTruthy();
    });

    it('Deve renderizar 2 drag-itens', () => {
        getResponse();
        fixture.detectChanges();
        const dragItems = fixture.nativeElement.querySelectorAll('.drag-item');
        expect(dragItems.length).toBe(2);
    });

    it('deve renderizar um item com position diferente do inicial', () => {
        const changedObject = [{ ...defaultObjects[0], position: { x: 10, y: 10 } }];
        const req = httpMock.expectOne(`${config.baseUrl}/auth/get-objects`);
        expect(req.request.method).toBe('POST');
        req.flush({ userId: '1', objects: changedObject });
        component.objects = [...component.userItems];
        fixture.detectChanges();
        const dragItem = fixture.nativeElement.querySelector('.drag-item');
        expect(dragItem.style.transform).toBe('translate3d(10px, 10px, 0px)');
    });

    it('Deve Renderizar um item e realizar um evento para movê-lo', () => {
        component.userItems = defaultObjects;
        component.objects = defaultObjects;
        component.saveChanges({ x: 10, y: 10 }, defaultObjects[0]);
        getResponse();
        fixture.detectChanges();
        const dragItem = fixture.nativeElement.querySelectorAll('.drag-item');
        expect(dragItem[0].style.transform).toBe('translate3d(10px, 10px, 0px)');
        expect(dragItem[1].style.transform).toBe('translate3d(0px, 0px, 0px)');
    });
});
