import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProfileComponent} from "./create-profile.component";

const routes: Routes = [
  {
    path: "create-profile",
    children: [
      {
        path: "",
        component: CreateProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProfileRoutingModule { }
