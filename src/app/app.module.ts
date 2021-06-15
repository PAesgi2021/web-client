import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { SocialFeedModule } from "./social-feed/social-feed.module";
import { LoginModule } from "./login/login.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from "./register/register.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    SocialFeedModule,
    LoginModule,
    BrowserAnimationsModule,
    RegisterModule,
    /* import above this comment */
    AppRoutingModule
  ],
  providers: [
    SocialFeedModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
