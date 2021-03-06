import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule, HomeRoutingModule],
    exports: [HomeComponent],
})
export class HomeModule {}
