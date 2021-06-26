import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialFeedRoutingModule } from './social-feed-routing.module';
import { SocialFeedComponent } from './social-feed.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  imports: [
    CommonModule,
    SocialFeedRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SocialFeedComponent,
    PostComponent,
    CreatePostComponent,
  ]
})
export class SocialFeedModule {
}
