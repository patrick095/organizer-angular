import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiConfig } from '@core/configs/api.config';
import { ApiService } from '@features/services/api.service';

import { SignupComponent } from './signup.component';
import SignupForm from './signup.form';

describe('SignupComponent', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, ReactiveFormsModule],
            declarations: [SignupComponent],
            providers: [SignupForm, ApiConfig, ApiService, HttpClient, HttpHandler],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
