import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockItemComponent } from './dock-item.component';

describe('DockItemComponent', () => {
    let component: DockItemComponent;
    let fixture: ComponentFixture<DockItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DockItemComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DockItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
