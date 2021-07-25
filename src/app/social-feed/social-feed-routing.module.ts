import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SocialFeedComponent} from "./social-feed.component";
import {CreatePostComponent} from "./create-post/create-post.component";


const routes: Routes = [
  {
    path: "social-feed",
    children: [
      {
        path: "",
        component: SocialFeedComponent
      },
      {
        path: "create-post",
        component: CreatePostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialFeedRoutingModule {
}
