import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../services/profile-service/profile.service";

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
    public profileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

  createProfile() {
    console.log(this.profileForm.get('pseudo').value)

    this.profileService.createProfile({
      pseudo: "155",
      firstName: "string",
      lastName: "123",
      account_id: 1
    }).subscribe();
  }

}
