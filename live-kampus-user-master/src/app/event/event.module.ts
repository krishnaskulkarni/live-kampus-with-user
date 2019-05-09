import { NgModule } from '@angular/core';
import { EventList } from './event-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { EventDetailsComponents } from './event-details.component';


@NgModule({
    declarations: [
        EventList,
        EventDetailsComponents,
    ],
    imports: [
        BrowserModule
    ],

    exports: [
       EventList,
       EventDetailsComponents,
    ]
   
})
export class EventModule {

}
