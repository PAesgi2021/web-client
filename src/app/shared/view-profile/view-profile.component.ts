import { Component, OnInit } from '@angular/core';
import {Profile} from "../../models/profile";
import {AccountService} from "../../services/account/account.service";
import {ProfileService} from "../../services/profile-service/profile.service";
import {Account} from "../../models/account";
import {HttpService} from "../../services/utils/http.service";
import {Cookie} from "../../models/cookie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  profile: Profile;
  account: Account;

  constructor(
    private accountService: AccountService,
    private profileService: ProfileService,
    private httpService: HttpService,
    private router: Router,
  ) {
    this.accountService.checkAuthentication();
  }

  ngOnInit(): void {
  }

  deleteProfile() {
    this.profileService.deleteProfile(this.httpService.getCookie().current_profile_id);
    // this.router.navigate(['/profile']).then( () => {
    //   window.location.reload();
    // })
  }

  setInformations() {

  }



}
