import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor(private route: Router) {}

    ngOnInit(): void {}

    public get isAuthenticated(): boolean {
        return document.cookie.includes('token');
    }

    public logout(): void {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        this.route.navigate(['/']);
    }
}
