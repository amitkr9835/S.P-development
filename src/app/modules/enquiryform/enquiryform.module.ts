import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {enquiryformRoutingModule} from './enquiryform-routing.module';
import { RouterModule } from "@angular/router";

@NgModule ({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(enquiryformRoutingModule)
    ]
})
export class enquiryformmodule{}