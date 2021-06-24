import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { CommentComponent } from './comment/comment.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommentComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommentComponent
  ]
})
export class SharedModule {
}
