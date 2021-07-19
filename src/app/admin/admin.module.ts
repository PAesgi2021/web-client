import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PostManagementComponent } from './post-management/post-management.component';
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { ChallengeManagementComponent } from './challenge-management/challenge-management.component';
import { MessageManagementComponent } from './message-management/message-management.component';
import { MatCardModule } from "@angular/material/card";
import { ArticleManagementComponent } from './article-management/article-management.component';


@NgModule({
  declarations: [
    AdminComponent,
    PostManagementComponent,
    ChallengeManagementComponent,
    MessageManagementComponent,
    ArticleManagementComponent,
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatTabsModule,
        SharedModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
    ]
})
export class AdminModule { }
