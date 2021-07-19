import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProfileService} from "../../services/profile-service/profile.service";
import {HttpService} from "../../services/utils/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-profile-management',
  templateUrl: './create-profile-management.component.html',
  styleUrls: ['./create-profile-management.component.scss']
})
export class CreateProfileManagementComponent implements OnInit {

  createProfileForm = new FormGroup({
    pseudo: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    roles: new FormControl(''),
  })
  roleList: string[] = ["ADMIN", "USER"];

  constructor(
    public profileService: ProfileService,
    public httpService: HttpService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  public createProfile(): void {
    if(this.createProfileForm.invalid) {
      return;
    }

    this.profileService.createProfile({
      pseudo: this.createProfileForm.get('pseudo').value,
      firstName: this.createProfileForm.get('firstname').value,
      lastName: this.createProfileForm.get('lastname').value,
      account_id: this.httpService.getCookie().account_id,
      roles: this.createProfileForm.get('roles').value
    }).subscribe();
    this.router.navigate(['/admin']).then( () => window.location.reload());
  }

  handleSelectChanges() {
    console.log(this.createProfileForm.get('roles').value)
  }
}
