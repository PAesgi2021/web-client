import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileManagementComponent} from "./profile-management.component";

const routes: Routes = [
  {
    path: "profile-management",
    children: [
      {
        path: "",
        component: ProfileManagementComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileManagementRoutingModule { }
