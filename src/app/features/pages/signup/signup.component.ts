import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StepsSignup, StepsSignupInputs } from '@core/enum/signup-steps.enum';
import { ApiService } from '@features/services/api.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleRight, faEye, faEyeSlash, faQuestionCircle, faSpinner, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import SignupForm from './signup.form';

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
    public isLoading: boolean;
    public step: number;
    public passwordNotValid: boolean;
    public invalidInputs: Array<boolean>;
    public showPassword: boolean;
    public showConfirmPassword: boolean;
    public form: FormGroup;

    public iconArrowRight: IconDefinition;
    public iconSpinner: IconDefinition;
    public iconEye: IconDefinition;
    public iconEyeClose: IconDefinition;
    public iconUserPlus: IconDefinition;
    public iconQuestion: IconDefinition;

    constructor(private apiService: ApiService, private route: Router, private signupForm: SignupForm) {
        this.iconArrowRight = faArrowCircleRight;
        this.iconSpinner = faSpinner;
        this.iconEye = faEye;
        this.iconEyeClose = faEyeSlash;
        this.iconUserPlus = faUserPlus;
        this.iconQuestion = faQuestionCircle;

        this.step = 0;
        this.isLoading = false;
        this.invalidInputs = [null, null, null, null, null];
        this.showPassword = false;
        this.showConfirmPassword = false;
        this.form = this.signupForm.signupForm;

        if (this.route.getCurrentNavigation().extras.state) {
            this.signupForm.email = this.route.getCurrentNavigation().extras.state.email;
            this.step = 1;
        }
    }

    ngOnInit(): void {}

    public validateStep(step: number) {
        this.invalidInputs[step] = !this.form.get(StepsSignupInputs[step]).valid;
    }

    public validateEmail(event: Event) {
        event.preventDefault();
        this.isLoading = true;
        this.apiService.validateEmail(this.signupForm.email).subscribe((response) => {
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

    public validateUser(event: Event) {
        event.preventDefault();
        this.isLoading = true;
        this.apiService.validadeUser(this.signupForm.user).subscribe((response) => {
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

    public signUp() {
        if (this.form.valid) {
            this.isLoading = true;
            this.apiService.signUp(this.signupForm.data).subscribe((res) => {
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
