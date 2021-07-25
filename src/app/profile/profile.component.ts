import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../services/profile-service/profile.service";
import {Profile} from "../models/profile";
import {AccountService} from "../services/account/account.service";
import {HttpService} from "../services/utils/http.service";
import {Cookie} from "../models/cookie";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile-management',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profiles: Profile[] = [];

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
    this.accountService.getAccountById().subscribe(account => {
      account.profiles.map(profile => {
        if (profile.status) {
          this.profiles.push(new Profile(profile));
        }
      })
    })
  }

  setCurrentProfile(selectedProfile: Profile) {
    const cookie: Cookie = this.httpService.getCookie();
    cookie.current_profile_id = selectedProfile.id;
    cookie.current_profile_pseudo = selectedProfile.pseudo;

    this.httpService.setCookie(cookie);

    if (this.httpService.getCookie().current_profile_id) {
      this.router.navigate(['/social-feed']).then(() => {
        window.location.reload();
      })
    }
  }


  createProfileView() {
    this.router.navigate(['/profile/create']).then(() => {
      window.location.reload();
    })
  }

}
