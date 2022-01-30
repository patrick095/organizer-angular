import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomParams } from '@core/interfaces/api.interface';

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    constructor(private http: HttpClient) {}

    public get<T>(url: string) {
        return this.http.get<T>(`${url}`, this.options());
    }

    public post<T>(url: string, body: any, customParams?: CustomParams) {
        return this.http.post<T>(`${url}`, body, this.options(customParams));
    }

    public put<T>(url: string, body: any, customParams?: CustomParams) {
        return this.http.put<T>(`${url}`, body, this.options(customParams));
    }

    public delete<T>(url: string, customParams?: CustomParams) {
        return this.http.delete<T>(`${url}`, this.options(customParams));
    }

    public patch<T>(url: string, body: any, customParams?: CustomParams) {
        return this.http.patch<T>(`${url}`, body, this.options(customParams));
    }

    private options(customParams?: CustomParams): CustomParams {
        if (customParams) {
            return customParams;
        }

        return {
            headers: {
                'Content-Type': 'application/json',
            },
            observe: 'body',
            responseType: 'json',
        };
    }
}
