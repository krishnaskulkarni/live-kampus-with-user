import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations:[
        AdminComponent
    ],
    imports:[
        BrowserModule
    ],
    exports:[],
    providers:[],
    bootstrap:[
        AdminComponent
    ]   
})
export class AdminModule{

}