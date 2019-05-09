import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export const loginRoutes:Routes=[
    {path: '',component: LoginComponent}
]


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(loginRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class LoginRoutingModule{}