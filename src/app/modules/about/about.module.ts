import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {aboutRoutingModule} from './about-routing.module';
import { RouterModule } from "@angular/router";

@NgModule ({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(aboutRoutingModule)
    ]
})
export class aboutmodule{}