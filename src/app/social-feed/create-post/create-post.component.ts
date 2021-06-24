import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postFormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    isPrivate: new FormControl(false),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitPost() {

  }

}
