import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account/account.service";
import {Observable} from "rxjs";
import {ProfileService} from "../../../services/profile-service/profile.service";
import {HttpService} from "../../../services/utils/http.service";
import {Profile} from "../../../models/profile";
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: Observable<boolean>;
  profile: Profile;


  constructor(
    public router: Router,
    public accountService: AccountService,
    public profileService: ProfileService,
    private httpService: HttpService,
    ) {
  }

  ngOnInit(): void {
    this.isLogged = this.accountService.isAuthenticated();
    this.selectedProfile();
  }

  public selectedProfile(): void {
    this.profileService.getProfileById(this.httpService.getCookie().current_profile_id).subscribe(value => {
      this.profile = new Profile( {
        ...value
      });
    })
  }

  public isAdmin(): boolean {
    return !!(this.profile && this.profile.roles.find(value => value.name === "ADMIN"));
  }

}
