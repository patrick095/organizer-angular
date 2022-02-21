import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiConfig } from '@core/configs/api.config';

import { ApiService } from './api.service';

describe('ApiServiceService', () => {
    let service: ApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [ApiService, ApiConfig, HttpClient, HttpHandler] });
        service = TestBed.inject(ApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
