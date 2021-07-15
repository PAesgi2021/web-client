import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { SocialFeedModule } from "./social-feed/social-feed.module";
import { LoginModule } from "./login/login.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from "./register/register.module";
import { HttpClientModule } from "@angular/common/http";
import {ProfileManagementModule} from "./profile-management/profile-management.module";
import {CreateProfileModule} from "./create-profile/create-profile.module";
import {FormsModule} from "@angular/forms";
import {AccountService} from "./services/account/account.service";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    LoginModule,
    RegisterModule,
    SharedModule,
    ProfileManagementModule,
    SocialFeedModule,
    CreateProfileModule,
    FormsModule,
    /* import above this comment */
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    SocialFeedModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
