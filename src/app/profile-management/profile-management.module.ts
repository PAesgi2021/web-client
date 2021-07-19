import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileManagementRoutingModule } from './profile-management-routing.module';
import { ProfileManagementComponent } from './profile-management.component';
import { SharedModule } from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({

  imports: [
    CommonModule,
    ProfileManagementRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    ProfileManagementComponent
  ]
})
export class ProfileManagementModule { }
