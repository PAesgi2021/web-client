import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PostService } from "../../services/post-service/post.service";
import { Post } from "../../models/post";
import { CreatePostDto } from "../../services/dto/create-post.dto";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  @Output()
  public readonly postCreated: EventEmitter<Post>;

  public createPostForm: FormGroup;

  private readonly defaultFormState: CreatePostDto = {
    description: '',
    isPrivate: false,
    image: '',
    profile_id: 1
  };

  public constructor(
    private router: Router,
    private postService: PostService
  ) {
    this.postCreated = new EventEmitter<Post>();
  }

  public ngOnInit(): void {
    this.createPostForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(1)]),
      isPrivate: new FormControl(false),
      image: new FormControl(''),
      profile_id: new FormControl(1)
    });

  }

  public onSubmitPost(event: Event): void {
    event.preventDefault();
    if (this.createPostForm.invalid) return;

    const newPost: CreatePostDto = this.createPostForm.value;

    this.postService.createPost(newPost).subscribe((newPost: Post) => this.postCreated.emit(newPost));

    this.createPostForm.reset(this.defaultFormState);
  }

  public handleImageChange(event): void {
    if (!event.target.files || !event.target.files[0]) return;

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.createPostForm.get('image').setValue(reader.result as string);
      console.log(file);
    }

    reader.readAsDataURL(file);
  }
}
