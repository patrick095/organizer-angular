/* eslint-disable @typescript-eslint/dot-notation */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { emailRegexp } from '@core/configs/regex.config';
import { ApiService } from '@features/services/api.service';
import { faArrowCircleRight, faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    @ViewChild('passwordInput') passwordInput: ElementRef;
    public user: string;
    public password: string;
    public isLoading: boolean;
    public isUserValid: boolean;
    public isUserInvalid: boolean;

    public arrowRight: IconDefinition;
    public spinner: IconDefinition;

    constructor(private apiService: ApiService, private router: Router) {
        this.user = '';
        this.password = '';
        this.isLoading = false;
        this.isUserValid = false;
        this.isUserInvalid = false;
        this.arrowRight = faArrowCircleRight;
        this.spinner = faSpinner;
    }

    ngOnInit(): void {}

    public signIn(event): void {
        event.preventDefault();
        if (this.user.length > 0 && this.password.length > 0) {
            this.isLoading = true;
            this.apiService.signIn(this.user, this.password).subscribe(
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

    public validateUser(): void {
        this.isLoading = true;
        if (emailRegexp.test(this.user)) {
            this.apiService.validateEmail(this.user).subscribe(
                (res) => {
                    this.isUserValid = res['valid'];
                    this.isUserInvalid = false;
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
        this.apiService.validadeUser(this.user).subscribe(
            (res) => {
                this.isUserValid = res['valid'];
                this.isUserInvalid = false;
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
