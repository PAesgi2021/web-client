import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { CreatePostComponent } from "../shared/create-post/create-post.component";
import { CreateChallengeComponent } from "../shared/create-challenge/create-challenge.component";


const routes: Routes = [
  {
    path: "admin",
    children: [
      {
        path: "",
        component: AdminComponent
      },
      {
        path: "create-post",
        component: CreatePostComponent
      },
      {
        path: "create-challenge",
        component: CreateChallengeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
