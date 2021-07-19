import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  createArticleForm: FormGroup;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    private _location: Location,
  ) { }

  ngOnInit(): void {
    this.createArticleForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl('', [Validators.required, Validators.minLength(1)]),
      price: new FormControl(''),
    });
  }

  // -------------------------------------------------------------------------------------------------------------------

  public handleCancelAction() {
    this._location.back();
  }

  public handleSubmitClick() {

  }
}
