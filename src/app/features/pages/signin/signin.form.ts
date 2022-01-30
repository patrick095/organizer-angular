import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordRegexp } from '@core/configs/regex.config';
import { SigninInterface } from '@core/interfaces/api.interface';

@Injectable()
export default class SigninForm {
    public signinForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.signinForm = this.fb.group({
            user: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegexp)]],
        });
    }

    public get form(): FormGroup {
        return this.signinForm;
    }

    public get user(): string {
        return this.signinForm.get('user').value;
    }

    public set user(value: string) {
        this.signinForm.get('user').setValue(value);
    }

    public get password(): string {
        return this.signinForm.get('password').value;
    }

    public set password(value: string) {
        this.signinForm.get('password').setValue(value);
    }

    public get isValid(): boolean {
        return this.signinForm.valid;
    }

    public get data(): SigninInterface {
        return {
            user: this.user,
            password: this.password,
        };
    }
}
