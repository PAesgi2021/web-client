import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PostService } from "../../services/post-service/post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  createPostForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl(''),
    isPrivate: new FormControl(false),
  });

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

  onSubmitPost() {
    if (this.createPostForm.invalid) return;

    this.postService.createPost({
      title: this.createPostForm.get("title").value,
      description: this.createPostForm.get("description").value,
      isPrivate: this.createPostForm.get("isPrivate").value
    }).subscribe();

    this.handleClose();
  }

  handleClose() {
    this.createPostForm.reset();
    window.location.reload();
  }
}
