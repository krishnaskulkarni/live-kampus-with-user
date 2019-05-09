import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchoolListComponent } from './school-list.component';

@NgModule({
    declarations:[
        SchoolListComponent
    ],
    imports:[BrowserModule],
    exports:[SchoolListComponent]
})
export class SchoolModule{

}