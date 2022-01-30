import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordRegexp } from '@core/configs/regex.config';
import { SignupInterface } from '@core/interfaces/api.interface';

@Injectable()
export default class SignupForm {
    public signupForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.signupForm = this.fb.group(
            {
                user: ['', [Validators.required, Validators.minLength(3)]],
                password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegexp)]],
                confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegexp)]],
                email: ['', [Validators.required, Validators.email]],
                name: ['', [Validators.required, Validators.minLength(3)]],
            },
            { Validators: this.checkPasswords },
        );
    }

    public get user(): string {
        return this.signupForm.get('user').value;
    }

    public set user(value: string) {
        this.signupForm.get('user').setValue(value);
    }

    public get password(): string {
        return this.signupForm.get('password').value;
    }

    public set password(value: string) {
        this.signupForm.get('password').setValue(value);
    }

    public set confirmPassword(value: string) {
        this.signupForm.get('confirmPassword').setValue(value);
    }

    public get confirmPassword(): string {
        return this.signupForm.get('confirmPassword').value;
    }

    public get email(): string {
        return this.signupForm.get('email').value;
    }

    public set email(value: string) {
        this.signupForm.get('email').setValue(value);
    }

    public get name(): string {
        return this.signupForm.get('name').value;
    }

    public get isValid(): boolean {
        return this.signupForm.valid;
    }

    public get data(): SignupInterface {
        return {
            user: this.user,
            password: this.password,
            email: this.email,
            name: this.name,
        };
    }

    private checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        const pass = group.get('password').value;
        const confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : { notSame: true };
    };
}
