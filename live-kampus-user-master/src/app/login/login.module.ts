import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRoutingModule } from './login.route';


@NgModule({

    declarations:[
        LoginComponent
    ],
    imports:[
        BrowserModule,
        LoginRoutingModule
        
    ],
    bootstrap:[
        LoginComponent
    ]
})
export class LoginModule{
}