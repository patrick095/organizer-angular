import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@features/services/api.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public email: string;
    public isRegistered: boolean;
    public isLoading: boolean;

    public iconSpinner: IconDefinition;
    public iconUserPlus: IconDefinition;
    constructor(private api: ApiService, private router: Router) {
        this.email = '';
        this.isLoading = false;
        this.iconSpinner = faSpinner;
        this.iconUserPlus = faUserPlus;
    }

    ngOnInit(): void {}

    public validateEmail(event: Event) {
        event.preventDefault();
        this.isLoading = true;
        this.api.validateEmail(this.email).subscribe((response) => {
            this.isLoading = false;
            if (response.valid) {
                this.isRegistered = true;
            } else if (!response.valid) {
                this.isRegistered = false;
                this.router.navigate(['/cadastrar'], { state: { email: this.email } });
            }
        });
    }
}
