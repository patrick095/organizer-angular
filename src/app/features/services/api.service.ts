import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseUser, ResponseData, ResponseValidate, UpdateObjectInterface } from '@core/interfaces/api.interface';
import { ApiConfig } from 'src/app/core/configs/api.config';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService extends BaseService {
    public baseUrl: string;

    constructor(private config: ApiConfig, http: HttpClient) {
        super(http);
        this.baseUrl = this.config.baseUrl;
    }

    public signIn(user: string, password: string) {
        return this.post<ApiResponseUser>(`${this.baseUrl}/login`, { user, password });
    }

    public signUp(userSignUp: { user: string; email: string; password: string; name: string }) {
        return this.post<ApiResponseUser>(`${this.baseUrl}/cadastrar`, userSignUp);
    }

    public updateUser(user: { name: string; email: string; user: string; password: string; newPassword: string }) {
        return this.post<ApiResponseUser>(`${this.baseUrl}/atualizar`, user);
    }

    public validateUser(user: string) {
        return this.get<ResponseValidate>(`${this.baseUrl}/validar?user=${user}`);
    }

    public validateEmail(email: string) {
        return this.get<ResponseValidate>(`${this.baseUrl}/validar?email=${email}`);
    }

    public getItems(token: string) {
        return this.post<ResponseData>(`${this.baseUrl}/auth/get-objects`, null, {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            observe: 'body',
        });
    }

    public updateItems(token: string, item: UpdateObjectInterface) {
        return this.post<UpdateObjectInterface>(`${this.baseUrl}/auth/update-object`, item, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                authorization: `Bearer ${token}`,
            },
            observe: 'body',
        });
    }
}
