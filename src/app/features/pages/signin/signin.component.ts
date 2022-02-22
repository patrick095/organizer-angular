/* eslint-disable @typescript-eslint/dot-notation */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegexp } from '@core/configs/regex.config';
import { ApiService } from '@features/services/api.service';
import { faArrowCircleRight, faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import SigninForm from './signin.form';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    @ViewChild('passwordInput') passwordInput: ElementRef;
    public isLoading: boolean;
    public isUserValid: boolean;
    public isUserInvalid: boolean;
    public form: FormGroup;

    public arrowRight: IconDefinition;
    public spinner: IconDefinition;

    constructor(private apiService: ApiService, private router: Router, private signForm: SigninForm) {
        this.form = signForm.form;
        this.isLoading = false;
        this.isUserValid = false;
        this.isUserInvalid = false;
        this.arrowRight = faArrowCircleRight;
        this.spinner = faSpinner;
    }

    ngOnInit(): void {}

    public signIn(): void {
        const { user, password } = this.signForm.data;
        this.form.markAsTouched();
        if (this.form.valid) {
            this.isLoading = true;
            this.apiService.signIn(user, password).subscribe(
                (res) => {
                    document.cookie = `token=${res['token']};`;
                    this.router.navigate(['/dash']);
                },
                () => {},
                () => {
                    this.isLoading = false;
                },
            );
        }
    }

    public validateUser(user: string): void {
        this.isLoading = true;
        if (emailRegexp.test(user)) {
            this.apiService.validateEmail(user).subscribe(
                (res) => {
                    this.isUserValid = res['valid'];
                    this.isUserInvalid = !res['valid'];
                    setTimeout(() => {
                        this.passwordInput.nativeElement.focus();
                    }, 100);
                },
                () => {
                    this.isLoading = false;
                    this.isUserInvalid = true;
                },
                () => {
                    this.isLoading = false;
                },
            );
            return;
        }
        this.apiService.validateUser(user).subscribe(
            (res) => {
                this.isUserValid = res['valid'];
                this.isUserInvalid = !res['valid'];
                setTimeout(() => {
                    this.passwordInput.nativeElement.focus();
                }, 100);
            },
            () => {
                this.isLoading = false;
                this.isUserInvalid = true;
            },
            () => {
                this.isLoading = false;
            },
        );
    }
}
