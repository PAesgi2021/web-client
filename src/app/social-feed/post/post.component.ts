import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Message } from '../../models/message';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  hasLike = false;
  hideComments;

  commentFormGroup = new FormGroup({
    text: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmitComment() {
    if (this.commentFormGroup.invalid) return;

    this.post.addMessage(new Message(this.commentFormGroup.value.text));
    this.hideComments = true;
    this.commentFormGroup.reset();
  }

  handleVisibilityCommentAction() {
    this.hideComments = !this.hideComments;
  }

  handleLikeAction() {
    this.hasLike = !this.hasLike;

    this.hasLike ? this.post.likes++ : this.post.likes--;
  }
}
