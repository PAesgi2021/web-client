import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Message } from '../../models/message';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { MessageService } from "../../services/message-service/message.service";
import { PostService } from "../../services/post-service/post.service";
import { HttpService } from "../../services/utils/http.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  postDate: Date;
  hasLike = false;
  hideComments;
  contentComment = new FormControl('', [Validators.required, Validators.minLength(1)]);


  constructor(
    private messageService: MessageService,
    private postService: PostService,
    private httpService: HttpService,
  ) {
  }

  ngOnInit(): void {
    this.postDate = new Date(this.post.createdAt);
  }

  // -------------------------------------------------------------------------------------------------------------------

  onSubmitComment() {
    this.messageService.createMessage({
      content: this.contentComment.value,
      post_id: this.post.id,
      profile_id: this.httpService.getCookie().current_profile_id,
    }).subscribe(value => {
      this.post.comments.push(new Message({
        ...value
      }))
    });
    this.hideComments = true;
    this.contentComment.reset();
  }

  handleVisibilityCommentAction() {
    this.hideComments = !this.hideComments;
  }

  handleLikeAction() {
    this.hasLike = !this.hasLike;
    let action = '';
    if (this.hasLike) {
      this.post.likes++;
      action = 'like'
    } else {
      this.post.likes--;
      action = 'unlike'
    }

    this.postService.updateLike(this.post.id, action).subscribe(console.log);
  }

}
