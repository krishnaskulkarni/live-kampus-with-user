import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {homeRoute } from './home.route';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(homeRoute)
    ],
    exports: [
        HomeComponent,
        RouterModule
    ]
})
export class HomeModule {}
