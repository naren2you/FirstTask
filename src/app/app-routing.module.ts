import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from "./page/user/user-list/user-list.component";
import { UserAddComponent } from "./page/user/user-add/user-add.component";
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/adduser', pathMatch: 'full' },
  { path: 'adduser', component: UserAddComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'userprofile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
