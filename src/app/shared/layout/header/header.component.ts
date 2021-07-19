import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account/account.service";
import {Observable} from "rxjs";
import {ProfileService} from "../../../services/profile-service/profile.service";
import {HttpService} from "../../../services/utils/http.service";
import {CookieService} from "ngx-cookie-service";
import {Cookie} from "../../../models/cookie";
import {Profile} from "../../../models/profile";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hide = true;
  isLogged: Observable<boolean>;
  profileName: string;
  profile: Profile;


  constructor(
    public accountService: AccountService,
    public profileService: ProfileService,
    private httpService: HttpService,
    ) {
    this.isLogged = this.accountService.isAuthenticated();
    // if(this.httpService.getCookie()) {
    //   this.profileName = this.httpService.getCookie().current_profile_pseudo ? this.httpService.getCookie().current_profile_pseudo : '';
    // }

  }

  ngOnInit(): void {
    this.selectedProfile();
  }

  public selectedProfile(): void {
    this.profileService.getProfileById(this.httpService.getCookie().current_profile_id).subscribe(value => {
      this.profile = new Profile( {
        ...value
      });
    })
  }


}
