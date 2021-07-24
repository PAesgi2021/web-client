import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../services/profile-service/profile.service";
import { Profile } from "../models/profile";
import { HttpService } from "../services/utils/http.service";
import { Role } from "../models/role";
import { Router } from "@angular/router";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  profile: Profile;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private httpService: HttpService
  ) {
  }

  ngOnInit(): void {
    this.fetchProfile();
  }

  private fetchProfile(): void {
    this.profileService.getProfileById(this.httpService.getCookie().current_profile_id)
      .subscribe(
        value => {
          this.profile = new Profile(value);
          this.isAdmin();
        },
        error => console.log(error)
      )
  }

  private isAdmin(): void {
    if (this.profile.roles.find(value => value.name === 'ADMIN')) return;

    this.router.navigate(['/social-feed']);
  }

}
