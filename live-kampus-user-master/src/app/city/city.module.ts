import { NgModule } from '@angular/core';
import { CityListComponent } from './city-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [
        CityListComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
    ],
    exports: [
        CityListComponent
    ]
})
export class CityModule {

}
