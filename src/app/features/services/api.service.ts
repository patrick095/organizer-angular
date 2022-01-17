import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataObject } from '@core/interfaces/data.interface';
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
        return this.post<{ user: any; token: string; }>(`${this.baseUrl}/login`, { user, password });
    }

    public signUp(userSignUp: { user: string; email: string; password: string; name: string; }) {
        return this.post(`${this.baseUrl}/cadastrar`, userSignUp);
    }

    public updateUser(user: { name: string; email: string; user: string; password: string }) {
        return this.post(`${this.baseUrl}/atualizar`, user);
    }

    public getItems(token: string) {
        return this.post(`${this.baseUrl}/get-data`, null, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                authorization: `Bearer ${token}`,
            },
        });
    }

    public updateItems(token: string, items: DataObject) {
        return this.post(`${this.baseUrl}/update-data`, items, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                authorization: `Bearer ${token}`,
            },
        });
    }
}
