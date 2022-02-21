import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiConfig } from '@core/configs/api.config';
import { ApiService } from '@features/services/api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SigninComponent } from './signin.component';
import SigninForm from './signin.form';
import { SigninRoutingModule } from './signin.routing.module';

describe('SigninComponent', () => {
    let component: SigninComponent;
    let fixture: ComponentFixture<SigninComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, ReactiveFormsModule, RouterTestingModule, FontAwesomeModule, SigninRoutingModule],
            declarations: [SigninComponent],
            providers: [SigninForm, ApiConfig, ApiService, HttpClient, HttpHandler],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SigninComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
