import { Injectable } from '@angular/core';
import { ApiConfig } from 'src/app/core/configs/api.config';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public baseUrl: string;

    constructor(private config: ApiConfig) {
        this.baseUrl = this.config.baseUrl;
    }

    public async signIn(user: string, password: string) {
        const response = await fetch(
            `${this.baseUrl}/signin`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user,
                    password,
                }),
            },
        );
        const data = await response.json();
        if (data === 'invalid username or passord') {
            return { error: 'invalid username or passord' };
        }
        return data;
    }

    public async signUp(userSignUp: { user: string; email: string; password: string; name: string; }) {
        const response = await fetch(
            `${this.baseUrl}/signup`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userSignUp),
            },
        );
        const data = await response.json();
        return data;
    }

    public async getUser(user: string, token: string) {
        const response = await fetch(
            `${this.baseUrl}/user`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user,
                    token,
                }),
            },
        );
        const data = await response.json();
        return data;
    }

    public async getUserItems(user: string, token: string) {
        const response = await fetch(
            `${this.baseUrl}/user/items`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user,
                    token,
                }),
            },
        );
        const data = await response.json();
        return data;
    }

    public async updateUser(user: string, token: string, userUpdate: { name: string; email: string; }) {
        const response = await fetch(
            `${this.baseUrl}/user/update`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user,
                    token,
                    userUpdate,
                }),
            },
        );
        const data = await response.json();
        return data;
    }

    public async updateUserItems(token: string, items: any) {
        const response = await fetch(
            `${this.baseUrl}/user/items/update`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token,
                    items,
                }),
            },
        );
        const data = await response.json();
        return data;
    }

    public async deleteUser(user: string, token: string, password: string) {
        const response = await fetch(
            `${this.baseUrl}/user/delete`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user,
                    token,
                    password,
                }),
            },
        );
        const data = await response.json();
        return data;
    }
}
