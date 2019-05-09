import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { chatRoute } from './chat.route';

@NgModule({
    declarations: [
        ChatComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(chatRoute)
    ],
    exports: [
        ChatComponent,
        RouterModule
    ]
})
export class ChatModule{

}