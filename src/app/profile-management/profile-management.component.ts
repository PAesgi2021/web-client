import { Component, OnInit } from '@angular/core';
import {AccountService} from "../services/account-service/account.service";
import {ProfileService} from "../services/profile-service/profile.service";
import {Profile} from "../models/profile";

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {

  profiles = [];

  constructor(
    public profileService: ProfileService
  ) {
  }

  ngOnInit(): void {
    this.fetchProfiles();
  }

  fetchProfiles() {
    this.profileService.getAllProfile().subscribe( response => {
      this.profiles = [];
      response.map(profile => {
        this.profiles.push(new Profile({
          ...profile
        }));
      });
    })
  }


}
