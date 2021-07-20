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
  hide = true;
  isLogged: Observable<boolean>;
  profileName: string;
  profile: Profile;


  constructor(
    public router: Router,
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

  public isAdmin(): boolean {

    for (const role of this.profile.roles) {
      if (role.name === "ADMIN") return true;
    }

    return false;
  }


  public handleAdminClick() {
    this.router.navigate(["/admin"]);
  }
}
