import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChallengeComponent} from "./challenge.component";
import {CreatePostComponent} from "../shared/create-post/create-post.component";

const routes: Routes = [{
  path: "challenge",
  children: [
    {
      path: "",
      component: ChallengeComponent
    },
    {
      path: "create-post/:tag",
      component: CreatePostComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule {
}
