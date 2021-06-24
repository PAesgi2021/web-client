import { Component, Input, OnInit } from '@angular/core';
import { Message } from "../../models/message";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() message: Message;

  hasLike = false

  constructor() { }

  ngOnInit(): void {
  }

  handleLikeAction() {
    this.hasLike = !this.hasLike;

    this.hasLike
      ? this.message.likes++
      : this.message.likes--
  }

}
