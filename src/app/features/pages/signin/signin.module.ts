import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin.component';
import SigninForm from './signin.form';

@NgModule({
    declarations: [SigninComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule, FontAwesomeModule],
    exports: [SigninComponent],
    providers: [SigninForm],
})
export class SigninModule {}
