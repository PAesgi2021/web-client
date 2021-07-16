import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../services/profile-service/profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  profileForm = new FormGroup({
    pseudo: new FormControl('', [Validators.required, Validators.minLength(1)]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })



  constructor(
    public profileService: ProfileService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.createProfile();
  }

  createProfile() {
    if(this.profileForm.invalid) {
      return;
    }

    this.profileService.createProfile( {
      pseudo: this.profileForm.get('pseudo').value,
      firstName: this.profileForm.get('firstname').value,
      lastName: this.profileForm.get('lastname').value,
      account_id: 1
    }).subscribe();
    this.router.navigate(['/profile-management'])
  }


}
