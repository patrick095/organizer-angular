import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './signup.component';
import SignupForm from './signup.form';

@NgModule({
    declarations: [SignupComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule, FontAwesomeModule],
    exports: [SignupComponent],
    providers: [SignupForm],
})
export class SignupModule {}
