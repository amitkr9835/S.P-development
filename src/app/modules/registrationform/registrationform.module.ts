import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {registrationformRoutingModule} from './registrationform-routing.module';
import { RouterModule } from "@angular/router";

@NgModule ({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(registrationformRoutingModule)
    ]
})
export class registrationformmodule{}