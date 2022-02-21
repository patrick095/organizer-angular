/* eslint-disable @typescript-eslint/indent */
import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface SigninInterface {
    user: string;
    password: string;
}

export interface SignupInterface {
    user: string;
    email: string;
    password: string;
    name: string;
}

export interface ApiResponseUser {
    user: {
        _id: string;
        name: string;
        email: string;
        user: string;
        theme: {
            bgColor: string;
            fontColor: string;
        };
    };
    token: string;
}

export interface CustomParams {
    headers?:
        | HttpHeaders
        | {
              [header: string]: string | string[];
          };
    observe: 'body';
    context?: HttpContext;
    params?:
        | HttpParams
        | {
              [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}

export interface ResponseValidate {
    valid: boolean;
    error?: string;
}

export interface ResponseData {
    userId: string;
    objects: Array<UserDataObjectInterface>;
}

export interface UpdateObjectInterface {
    userId: string;
    object: UserDataObjectInterface;
}

export interface UserDataObjectInterface {
    date: Date;
    description: string;
    id: string;
    title: string;
    type: string;
    theme: string;
    position: {
        x: number;
        y: number;
    };
}
