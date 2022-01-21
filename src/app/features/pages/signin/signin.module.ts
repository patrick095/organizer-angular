import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin.component';

@NgModule({
    declarations: [SigninComponent],
    imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule]
})
export class SigninModule {}
