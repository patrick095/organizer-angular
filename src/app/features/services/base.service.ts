import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    constructor(private http: HttpClient) { }

    public get<T>(url: string, customParams?: any) {
        return this.http.get<T>(
            `${url}`,
            customParams || {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            },
        );
    }

    public post<T>(url: string, body: any, customParams?: any) {
        return this.http.post<T>(
            `${url}`,
            body,
            customParams || {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            },
        );
    }

    public put(url: string, body: any, customParams?: any) {
        return this.http.put(
            `${url}`,
            body,
            customParams || {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            },
        );
    }

    public delete(url: string, customParams?: any) {
        return this.http.delete(
            `${url}`,
            customParams || {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            },
        );
    }

    public patch(url: string, body: any, customParams?: any) {
        return this.http.patch(
            `${url}`,
            body,
            customParams || {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            },
        );
    }
}
