import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Message } from '../../models/message';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from "../../services/message-service/message.service";
import { PostService } from "../../services/post-service/post.service";


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
    text: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  constructor(
    private messageService: MessageService,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
  }

  // -------------------------------------------------------------------------------------------------------------------

  onSubmitComment() {
    if (this.commentFormGroup.invalid) return;

    this.messageService.createMessage({
      content: this.commentFormGroup.value.text,
      post_id: this.post.id
    }).subscribe(value => {
      this.post.comments.push(new Message({
        ...value
      }))
    });
    this.hideComments = true;
    this.commentFormGroup.reset();
  }

  handleVisibilityCommentAction() {
    this.hideComments = !this.hideComments;
  }

  handleLikeAction() {
    this.hasLike = !this.hasLike;
    this.hasLike ? this.post.likes++ : this.post.likes--;
    this.postService.updatePost(this.post.id, {likes: this.post.likes}).subscribe();
  }

}
