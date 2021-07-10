import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PostService } from "../../services/post-service/post.service";
import * as Buffer from "buffer";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  createPostForm = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.minLength(1)]),
    isPrivate: new FormControl(false),
  });
  image = '';

  constructor(
    private router: Router,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmitPost() {
    if (this.createPostForm.invalid) return;

    this.postService.createPost({
      description: this.createPostForm.get("description").value,
      isPrivate: this.createPostForm.get("isPrivate").value,
      image: this.image,
      profile_id: 1
    }).subscribe();

    this.handleClose();
  }

  handleClose() {
    this.createPostForm.reset();
    window.location.reload();
  }

  handleTestImg(event) {
    if (!event.target.files || !event.target.files[0]) return;

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.image = reader.result as string;
    }

    reader.readAsDataURL(file);
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
