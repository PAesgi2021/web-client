import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { CommentComponent } from './comment/comment.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {AppModule} from "../app.module";
import {CookieService} from "ngx-cookie-service";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommentComponent,
    SpinnerComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommentComponent,
    SpinnerComponent
  ]
})
export class SharedModule {
}
