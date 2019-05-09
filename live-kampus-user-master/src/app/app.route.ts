import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
    {path: '', component: AppComponent},
    { path: 'login', loadChildren: './login/login.module#LoginModule' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
