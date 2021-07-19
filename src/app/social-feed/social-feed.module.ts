import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { SocialFeedRoutingModule } from './social-feed-routing.module';
import { SocialFeedComponent } from './social-feed.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreatePostComponent } from './create-post/create-post.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  imports: [
    CommonModule,
    SocialFeedRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    SocialFeedComponent,
    PostComponent,
    CreatePostComponent,
    MenuComponent,
    FriendListComponent,
  ],
  providers: [
  ]
})
export class SocialFeedModule {
}
