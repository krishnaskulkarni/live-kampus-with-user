import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CityModule } from './city/city.module';
import { SchoolModule } from './school/school.module';
import { EventModule } from './event/event.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { appRoutes, AppRoutingModule } from './app.route';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './user/profile/profile.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    UserModule,
    CityModule,
    SchoolModule,
    EventModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
