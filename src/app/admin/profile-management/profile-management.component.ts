import {Component, OnInit} from '@angular/core';
import {Profile} from "../../models/profile";
import {ProfileService} from "../../services/profile-service/profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {

  profiles: Profile[];
  isFetching: boolean;

  constructor(
    public profileService: ProfileService,
    public router: Router,
  ) {
    this.isFetching = true;
  }

  ngOnInit(): void {
    this.profiles = this.fetchProfiles();
  }

  public fetchProfiles(): Profile[] {
    const result: Profile[] = [];
    this.profileService.getAllProfile().subscribe(value => {
      value.map(profile => {
        result.push(new Profile({
          ...profile
        }));
      });
    });
    this.handleIsFetching();
    return result;
  }

  public handleIsFetching(): void {
    this.profiles ? this.isFetching = false : this.isFetching = true;
  }

  public handleAddProfileAction(): any {
    this.router.navigate(['admin/create-profile']);
  }

  public profileRoles(profile: Profile): string {
    let result = "";
    profile.roles.forEach(value => {
      result += `[${value.name}] `;
    })

    return result;
  }

  public handleStatusClick(profile: Profile): void {
    profile.status = !profile.status;
    this.profileService.updateProfile(profile.id, {status: profile.status}).subscribe(console.log);
  }
}
