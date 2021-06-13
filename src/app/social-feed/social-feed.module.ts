import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialFeedRoutingModule } from './social-feed-routing.module';
import { SocialFeedComponent } from './social-feed.component';


@NgModule({
  declarations: [
    SocialFeedComponent
  ],
  imports: [
    CommonModule,
    SocialFeedRoutingModule
  ]
})
export class SocialFeedModule {
}
