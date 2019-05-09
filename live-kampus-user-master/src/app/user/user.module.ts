import { NgModule, OnInit } from '@angular/core';
import { UserRouter } from './user.route';
import { UserComponent } from './user.component';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { FriendsModule } from './Friends/friends.module';
import { RoomSpaceModule } from './Room-space/room-space.module';
import { ChatModule } from './chat/chat.module';




@NgModule({
    declarations: [
        UserComponent,
    ],
    imports: [
        UserRouter,
        HomeModule,
        ProfileModule,
        FriendsModule,
        RoomSpaceModule,
        ChatModule
    ],
    exports: [
        UserComponent
    ]
})
export class UserModule {
}
