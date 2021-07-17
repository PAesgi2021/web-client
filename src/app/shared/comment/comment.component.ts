import { Component, Input, OnInit } from '@angular/core';
import { Message } from "../../models/message";
import { MessageService } from "../../services/message-service/message.service";
import { FileUtils } from "../../utils/file-utils";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() message: Message;
  messageDate;
  hasLike = false

  constructor(
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.messageDate = FileUtils.hoursDiff(new Date(Date.now()), new Date(this.message.createAt));
    console.log(this.messageDate);
  }

  handleLikeAction() {
    this.hasLike = !this.hasLike;
    this.hasLike ? this.message.likes++ : this.message.likes--;
    this.messageService.updateMessage(this.message.id, {likes: this.message.likes}).subscribe();
  }

}
