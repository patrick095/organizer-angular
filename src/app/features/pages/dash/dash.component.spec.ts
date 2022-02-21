import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiConfig } from '@core/configs/api.config';
import { ApiService } from '@features/services/api.service';

import { DashComponent } from './dash.component';

describe('DashComponent', () => {
    let component: DashComponent;
    let fixture: ComponentFixture<DashComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashComponent],
            providers: [ApiConfig, ApiService, HttpClient, HttpHandler],
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
});
