import { NgModule } from "@angular/core";
import { PassangerDashboardComponent } from './passanger-dashboard/passanger-dashboard.component';
import { MaterialModule } from "../materials/material.module";
import { CommonModule } from "@angular/common";
import { PassangerCardComponent } from './passanger-card/passanger-card.component';
import { PassangerCountComponent } from './passanger-count/passanger-count.component';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations :[
    PassangerDashboardComponent,
    PassangerCardComponent,
    PassangerCountComponent,
    GetConfirmComponent
  ],
    imports : [CommonModule ,MaterialModule,FormsModule],
    exports : [PassangerDashboardComponent]
})
export class PassangerModule{}