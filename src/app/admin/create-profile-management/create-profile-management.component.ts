import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../services/profile-service/profile.service";
import {HttpService} from "../../services/utils/http.service";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account/account.service";

@Component({
  selector: 'app-create-profile-management',
  templateUrl: './create-profile-management.component.html',
  styleUrls: ['./create-profile-management.component.scss']
})
export class CreateProfileManagementComponent implements OnInit {

  createProfileForm = new FormGroup({
    pseudo: new FormControl('', [Validators.required, Validators.minLength(1)]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    roles: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })
  roleList: string[] = ["ADMIN", "USER"];

  constructor(
    public profileService: ProfileService,
    public accountService: AccountService,
    public httpService: HttpService,
    public router: Router,
  ) {
    this.accountService.checkAuthentication();
  }

  ngOnInit(): void {
  }

  public createProfile(): void {
    if (this.createProfileForm.invalid) {
      return;
    }

    this.profileService.createProfile({
      pseudo: this.createProfileForm.get('pseudo').value,
      firstName: this.createProfileForm.get('firstname').value,
      lastName: this.createProfileForm.get('lastname').value,
      account_id: this.httpService.getCookie().account_id,
      roles: this.createProfileForm.get('roles').value
    }).subscribe();
    this.router.navigate(['/admin']).then(() => window.location.reload());
  }

  public cancel(): void {
    this.router.navigate(['/admin']).then(() => window.location.reload());
  }

  handleSelectChanges() {
    console.log(this.createProfileForm.get('roles').value)
  }
}
