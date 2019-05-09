import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { profileRoute } from './profile.route';
import { ProfileService } from './profile.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(profileRoute),
        HttpClientModule
    ],
    providers:[
        ProfileService
    ],
    exports: [
        ProfileComponent,
        RouterModule
    ]

})
export class ProfileModule{

}