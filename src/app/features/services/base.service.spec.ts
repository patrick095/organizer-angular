import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
    let service: BaseService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [BaseService, HttpClient, HttpHandler] });
        service = TestBed.inject(BaseService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
