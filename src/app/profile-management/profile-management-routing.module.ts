import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileManagementComponent} from "./profile-management.component";
import {CreateProfileComponent} from "../shared/create-profile/create-profile.component";
import {ViewProfileComponent} from "../shared/view-profile/view-profile.component";

const routes: Routes = [
  {
    path: "profile",
    children: [
      {
        path: "",
        component: ProfileManagementComponent
      },
      {
        path: "create",
        component: CreateProfileComponent
      },
      {
        path: "view",
        component: ViewProfileComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileManagementRoutingModule { }
