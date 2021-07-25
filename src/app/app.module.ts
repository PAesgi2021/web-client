import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {SocialFeedModule} from "./social-feed/social-feed.module";
import {LoginModule} from "./login/login.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterModule} from "./register/register.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {AdminModule} from "./admin/admin.module";
import {ShopModule} from "./shop/shop.module";
import {ProfileModule} from "./profile/profile.module";
import {ChallengeModule} from "./challenge/challenge.module";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    LoginModule,
    RegisterModule,
    SharedModule,
    ProfileModule,
    SocialFeedModule,
    FormsModule,
    AdminModule,
    ShopModule,
    ChallengeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    CookieService,
    SocialFeedModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
