import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './signup.component';

@NgModule({
    declarations: [SignupComponent],
    imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule],
})
export class SignupModule {}
