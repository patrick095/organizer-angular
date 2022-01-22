import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StepsSignup } from '@core/enum/signup-steps.enum';
import { ApiService } from '@features/services/api.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleRight, faEye, faEyeSlash, faSpinner, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    @ViewChild('emailInput') emailInput: ElementRef;
    @ViewChild('userInput') userInput: ElementRef;
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('passwordInput') passwordInput: ElementRef;
    @ViewChild('confirmPasswordInput') confirmPasswordInput: ElementRef;
    public name: string;
    public email: string;
    public user: string;
    public password: string;
    public confirmPassword: string;
    public isLoading: boolean;
    public step: number;
    public passwordNotValid: boolean;
    public invalidInputs: Array<boolean>;
    public showPassword: boolean;
    public showConfirmPassword: boolean;

    public iconArrowRight: IconDefinition;
    public iconSpinner: IconDefinition;
    public iconEye: IconDefinition;
    public iconEyeClose: IconDefinition;
    public iconUserPlus: IconDefinition;

    constructor(private apiService: ApiService, private route: Router) {
        this.iconArrowRight = faArrowCircleRight;
        this.iconSpinner = faSpinner;
        this.iconEye = faEye;
        this.iconEyeClose = faEyeSlash;
        this.iconUserPlus = faUserPlus;

        this.step = 0;
        this.isLoading = false;
        this.email = '';
        this.password = '';
        this.confirmPassword = null;
        this.user = '';
        this.name = '';
        this.invalidInputs = [null, null, null, null, null];
        this.showPassword = false;
        this.showConfirmPassword = false;

        if (this.route.getCurrentNavigation().extras.state) {
            this.email = this.route.getCurrentNavigation().extras.state.email;
            this.step = 1;
        }
    }

    ngOnInit(): void {}

    public validateBothPassword() {
        if (this.step === 4) {
            if (this.confirmPassword.length >= 8 && this.password === this.confirmPassword) {
                this.invalidInputs[4] = false;
                return true;
            }
            this.invalidInputs[4] = true;
        }
        return this.password === this.confirmPassword;
    }

    public validateEmail() {
        this.isLoading = true;
        this.apiService.validateEmail(this.email).subscribe((response) => {
            this.isLoading = false;
            if (!response.valid) {
                this.invalidInputs[0] = false;
                this.step = 1;
                this.focusNextInput();
                return;
            }
            this.step = 0;
            this.invalidInputs[0] = true;
        });
    }

    public validateUser() {
        this.isLoading = true;
        this.apiService.validadeUser(this.user).subscribe((response) => {
            this.isLoading = false;
            if (!response.valid) {
                this.invalidInputs[1] = false;
                this.step = 2;
                this.focusNextInput();
                return;
            }
            this.step = 1;
            this.invalidInputs[1] = true;
        });
    }

    public validateName() {
        if (this.name.length > 5 && this.name.split(' ').length >= 2) {
            this.invalidInputs[2] = false;
            this.step = 3;
            return;
        }
        this.invalidInputs[2] = true;
    }

    public validatePassword() {
        if (this.password.length >= 8) {
            this.invalidInputs[3] = false;
            this.step = 4;
            return;
        }
        this.invalidInputs[3] = true;
    }

    public signUp(event: Event) {
        event.preventDefault();
        const userSignUp = {
            user: this.user,
            email: this.email,
            password: this.password,
            name: this.name,
        };

        if (this.validateBothPassword() && this.step === 4) {
            this.isLoading = true;
            this.apiService.signUp(userSignUp).subscribe((res) => {
                this.isLoading = false;
                document.cookie = `token=${res.token};`;
                this.route.navigate(['/dash']);
            });
        }
    }

    private focusNextInput() {
        setTimeout(() => {
            this[StepsSignup[this.step]].nativeElement.focus();
        }, 100);
    }
}
