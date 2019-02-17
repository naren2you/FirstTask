import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgXBootstrapModule } from "./ngxbootstrap";

import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from "./page/navigation/navigation.component";
import { UserListComponent } from "./page/user/user-list/user-list.component";
import { UserAddComponent } from "./page/user/user-add/user-add.component";
import { ProfileComponent } from './page/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavigationComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    NgXBootstrapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
