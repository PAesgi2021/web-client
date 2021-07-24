import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge.component';
import { SocialFeedModule } from "../social-feed/social-feed.module";
import { SharedModule } from "../shared/shared.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    ChallengeComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    SocialFeedModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class ChallengeModule { }
