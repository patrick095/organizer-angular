import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiConfig } from '@core/configs/api.config';

import { ApiService } from './api.service';

describe('ApiServiceService', () => {
    let service: ApiService;
    let http: HttpClient;
    const config = new ApiConfig();

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [ApiConfig], imports: [HttpClientTestingModule] });
        service = TestBed.inject(ApiService);
        http = TestBed.inject(HttpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Deve acessar corretamente a rota cadastrar e retornar o usuário cadastrado', () => {
        const spyPost = spyOn(http, 'post').and.callThrough();

        const response = service.signUp({ user: 'teste', email: 'teste@test.com', password: 'teste', name: 'teste' });
        response.subscribe((res) => {
            expect(res.user.user).toBe('teste');
        });
        expect(spyPost).toHaveBeenCalledWith(
            `${config.baseUrl}/cadastrar`,
            { user: 'teste', email: 'teste@test.com', password: 'teste', name: 'teste' },
            { headers: { 'Content-Type': 'application/json' }, observe: 'body', responseType: 'json' },
        );
    });

    it('Deve acessar corretamente a rota login e trazer o usuário de teste', () => {
        const spyPost = spyOn(http, 'post').and.callThrough();

        const response = service.signIn('teste', 'teste');
        response.subscribe((res) => {
            expect(res.user.user).toBe('teste');
        });
        expect(spyPost).toHaveBeenCalledWith(
            `${config.baseUrl}/login`,
            { user: 'teste', password: 'teste' },
            { headers: { 'Content-Type': 'application/json' }, observe: 'body', responseType: 'json' },
        );
    });

    it('Deve acessar corretamente a rota atualizar e trazer o usuário atualizado', () => {
        const spyPost = spyOn(http, 'post').and.callThrough();

        const response = service.updateUser({
            user: 'teste',
            email: 'teste@test.com',
            password: 'teste',
            name: 'teste atualizado',
            newPassword: 'teste123',
        });
        response.subscribe((res) => {
            expect(res.user.user).toBe('teste');
            expect(res.user.name).toBe('teste atualizado');
        });
        expect(spyPost).toHaveBeenCalledWith(
            `${config.baseUrl}/atualizar`,
            { user: 'teste', email: 'teste@test.com', password: 'teste', name: 'teste atualizado', newPassword: 'teste123' },
            { headers: { 'Content-Type': 'application/json' }, observe: 'body', responseType: 'json' },
        );
    });

    it('Deve acessar corretamente a rota valdiar usuário e trazer se o usuário é valido', () => {
        const spyGet = spyOn(http, 'get').and.callThrough();

        const response = service.validateUser('teste');
        response.subscribe((res) => {
            expect(res.valid).toBe(true);
        });
        expect(spyGet).toHaveBeenCalledWith(`${config.baseUrl}/validar?user=teste`, {
            headers: { 'Content-Type': 'application/json' },
            observe: 'body',
            responseType: 'json',
        });
    });

    it('Deve acessar corretamente a rota validar email e trazer se o email é valido', () => {
        const spyGet = spyOn(http, 'get').and.callThrough();

        const response = service.validateEmail('teste@test.com');
        response.subscribe((res) => {
            expect(res.valid).toBe(true);
        });
        expect(spyGet).toHaveBeenCalledWith(`${config.baseUrl}/validar?email=teste@test.com`, {
            headers: { 'Content-Type': 'application/json' },
            observe: 'body',
            responseType: 'json',
        });
    });

    it('Deve acessar corretamente a rota para pesquisar objetos do usuário', () => {
        const spyPost = spyOn(http, 'post').and.callThrough();

        const response = service.getItems('token');
        response.subscribe((res) => {
            expect(!!res.objects.length).toBe(true);
            expect(res.userId).toBe('teste');
        });

        expect(spyPost).toHaveBeenCalledWith(`${config.baseUrl}/auth/get-objects`, null, {
            headers: { 'Content-Type': 'application/json', authorization: 'Bearer token' },
            observe: 'body',
        });
    });

    it('Deve acessar corretamente a rota para atualizar objetos do usuário', () => {
        const spyPost = spyOn(http, 'post').and.callThrough();
        const object = {
            id: 'teste',
            title: 'teste',
            description: 'teste',
            date: new Date(),
            type: 'teste',
            theme: 'teste',
            position: {
                x: 0,
                y: 0,
            },
        };
        const response = service.updateItems('token', {
            userId: 'teste',
            object,
        });
        response.subscribe((res) => {
            expect(res.object[0].title).toBe('teste');
        });

        expect(spyPost).toHaveBeenCalledWith(
            `${config.baseUrl}/auth/update-object`,
            { userId: 'teste', object },
            {
                headers: { 'Content-Type': 'application/json', Accept: 'application/json', authorization: 'Bearer token' },
                observe: 'body',
            },
        );
    });
});
