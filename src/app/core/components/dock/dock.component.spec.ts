import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DockItemModule } from '../dock-item/dock-item.module';

import { DockComponent } from './dock.component';

describe('DockComponent', () => {
    let component: DockComponent;
    let fixture: ComponentFixture<DockComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DockItemModule],
            declarations: [DockComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('deve verificar a quantidade de itens dentro da dock', () => {
        const dock = fixture.debugElement.query(By.css('.dock'));
        expect(dock.children.length).toBe(4);
    });
});
