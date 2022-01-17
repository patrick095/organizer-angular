/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@features/services/api.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    public user!: string;

    public password!: string;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
    }

    public signIn(): void {
        this.apiService.signIn(this.user, this.password).subscribe(
            (res) => {
                console.log(res);
                document.cookie = `token=${res['token']};`;
            },
            (err) => {
                console.log(err);
            },
        );
    }
}
