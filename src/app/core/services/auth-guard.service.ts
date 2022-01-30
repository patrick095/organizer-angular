import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private route: Router) {}

    canActivate() {
        const hasToken = document.cookie.includes('token');
        if (hasToken) {
            return true;
        }
        this.route.navigate(['/']);
        return false;
    }
}
