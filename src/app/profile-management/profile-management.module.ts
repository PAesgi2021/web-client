import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileManagementRoutingModule } from './profile-management-routing.module';
import { ProfileManagementComponent } from './profile-management.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({

  imports: [
    CommonModule,
    ProfileManagementRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileManagementComponent
  ]
})
export class ProfileManagementModule { }
