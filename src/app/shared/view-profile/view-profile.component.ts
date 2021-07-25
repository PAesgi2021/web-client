import {Component, OnInit} from '@angular/core';
import {Profile} from "../../models/profile";
import {AccountService} from "../../services/account/account.service";
import {ProfileService} from "../../services/profile-service/profile.service";
import {Account} from "../../models/account";
import {HttpService} from "../../services/utils/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  profile: Profile;
  account: Account;
  isFetching: boolean = true;

  constructor(
    private accountService: AccountService,
    private profileService: ProfileService,
    private httpService: HttpService,
    private router: Router,
  ) {
    this.accountService.checkAuthentication();

  }

  ngOnInit(): void {
    this.fetchProfileById();
  }

  public fetchProfileById(): void {
    this.profileService.getProfileById(this.httpService.getCookie().current_profile_id).subscribe(value => {
      this.profile = new Profile({
        ...value
      });
      this.handleIsFetching();
    });
  }

  public handleIsFetching(): void {
    this.profile ? this.isFetching = false : this.isFetching = true;
  }


  public deleteProfile(): void {
    this.profile.status = !this.profile.status;
    this.profileService.updateProfile(this.profile.id, {status: this.profile.status}).subscribe(console.log);
    this.router.navigate(['/profile']).then(() => {
      window.location.reload();
    })
  }

  public profileRoles(profile: Profile): string {
    let result = "";
    profile.roles.forEach(value => {
      result += `[${value.name}] `;
    })

    return result;
  }


}
