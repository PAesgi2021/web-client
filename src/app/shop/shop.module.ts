import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatRippleModule } from "@angular/material/core";
import { SocialFeedModule } from "../social-feed/social-feed.module";
import { MatExpansionModule } from "@angular/material/expansion";


@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule,
    SocialFeedModule,
    MatExpansionModule
  ],
  declarations: [
    ShopComponent
  ],
})
export class ShopModule { }
