import { Component, Input, OnInit } from '@angular/core';
import { Message } from "../../models/message";
import { MessageService } from "../../services/message-service/message.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() message: Message;
  messageDate: string;
  hasLike = false

  constructor(
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    console.log(typeof this.message.date)
    console.log(this.message.date.getDate())
  }

  handleLikeAction() {
    this.hasLike = !this.hasLike;
    this.hasLike ? this.message.likes++ : this.message.likes--;
    this.messageService.updateMessage(this.message.id, {likes: this.message.likes}).subscribe();
  }

}
