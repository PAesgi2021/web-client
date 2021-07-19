import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ChallengeService } from "../../services/challenge-service/challenge.service";


@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {

  public createChallengeForm: FormGroup;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    private _location: Location,
    private challengeService: ChallengeService,
  ) {
  }

  ngOnInit(): void {
    this.createChallengeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl('', [Validators.required, Validators.minLength(1)]),
      image: new FormControl(''),
    });
  }

  // -------------------------------------------------------------------------------------------------------------------

  public handleCancelAction() {
    this._location.back();
  }


  public handleImageChange(event): void {
    if (!event.target.files || !event.target.files[0]) return;

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.createChallengeForm.get('image').setValue(reader.result as string);
      console.log(file);
    }

    reader.readAsDataURL(file);
  }

  public handleSubmitClick(): void {
    this.challengeService.createChallenge({
      ...this.createChallengeForm.value
    }).subscribe(console.log);
    this.handleCancelAction();
  }
}
