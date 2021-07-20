import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({

  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
