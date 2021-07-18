import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile-service/profile.service";
import {Profile} from "../models/profile";
import {AccountService} from "../services/account/account.service";
import {HttpService} from "../services/utils/http.service";
import {Cookie} from "../models/cookie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {

  profiles = [];

  constructor(
    private profileService: ProfileService,
    private accountService: AccountService,
    private httpService: HttpService,
    private router: Router,
  ) {
    this.accountService.checkAuthentication();
  }

  ngOnInit(): void {
    this.fetchProfiles();
  }

  fetchProfiles() {
    this.accountService.getAccountById().subscribe( response => {
      this.profiles = response.profiles;
    })
  }

  setCurrentProfile(selectedProfile: Profile) {
    const cookie: Cookie = this.httpService.getCookie();
    cookie.current_profile_id = selectedProfile.id;
    cookie.current_profile_name = selectedProfile.pseudo;

    this.httpService.setCookie(cookie);

    if(this.httpService.getCookie().current_profile_id) {
      this.router.navigate(['/social-feed']).then( () => {
        window.location.reload();
      })
    }
  }





}
