import { NgModule } from '@angular/core';
import { FriendsComponent } from './friends.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { friendsRoute } from './friends.route';

@NgModule({
    declarations: [
        FriendsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(friendsRoute)
    ],
    exports: [
        FriendsComponent,
        RouterModule
    ]
})
export class FriendsModule {

}
