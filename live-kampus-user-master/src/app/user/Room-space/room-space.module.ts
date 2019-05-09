import { NgModule } from '@angular/core';
import { RoomSpaceComponent } from './room-space.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { roomRoutes } from './room-space.route';

@NgModule({
    declarations: [
        RoomSpaceComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(roomRoutes)
    ],
    exports: [
        RoomSpaceComponent,
        RouterModule
    ]
})
export class RoomSpaceModule{

}