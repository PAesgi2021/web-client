import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {CommentComponent} from './comment/comment.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {CreateChallengeComponent} from './create-challenge/create-challenge.component';
import {CreateProfileComponent} from './create-profile/create-profile.component';
import {ViewProfileComponent} from './view-profile/view-profile.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatCardModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommentComponent,
    SpinnerComponent,
    CreatePostComponent,
    CreateChallengeComponent,
    CreateArticleComponent,
    CreateChallengeComponent,
    CreateProfileComponent,
    ViewProfileComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommentComponent,
    SpinnerComponent,
  ]
})
export class SharedModule {
}
