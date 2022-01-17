import { Component, OnInit } from '@angular/core';
import { ApiService } from '@features/services/api.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    public name: string;
    public email: string;
    public user: string;
    public password: string;
    public confirmPassword: string;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
    }

    public validadePassword() {
        return this.password === this.confirmPassword;
    }

    public signUp() {
        const userSignUp = {
            user: this.user,
            email: this.email,
            password: this.password,
            name: this.name,
        };

        if (this.validadePassword()) {
            this.apiService.signUp(userSignUp).subscribe(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                },
            );
        } else {
            console.log('Senhas não conferem');
        }
    }
}
