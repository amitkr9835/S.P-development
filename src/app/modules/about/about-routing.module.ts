import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

export const aboutRoutingModule:Routes = [
    {
        path: '',
        component: AboutComponent
    }
]