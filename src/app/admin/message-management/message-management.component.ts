import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "../../services/message-service/message.service";
import { Message } from "../../models/message";

@Component({
  selector: 'app-message-management',
  templateUrl: './message-management.component.html',
  styleUrls: ['./message-management.component.scss']
})
export class MessageManagementComponent implements OnInit {

  messages: Message[];
  isFetching: boolean;
  isSearching: boolean;
  myControl: FormControl;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    public messageService: MessageService,
    public router: Router
  ) {
    this.isFetching = true;
    this.isSearching = false;
  }

  public ngOnInit(): void {
    this.messages = this.fetchMessages();
  }

  // -------------------------------------------------------------------------------------------------------------------

  public handleAddPostAction(): any {
    this.router.navigate(['admin/create-challenge']);
  }

  public fetchMessages(): Message[] {
    const result: Message[] = [];
    this.messageService.getAllMessage().subscribe(response => {
      response.map(message => {
        result.push(new Message({
          ...message
        }));
      });
    });

    this.handleIsFetching();
    return result;
  }

  public handleIsFetching(): void {
    this.messages ? this.isFetching = false : this.isFetching = true;
  }

  public handleRemoveClick(id: string) {
    // this.messageService.deleteChallenge(id).subscribe(console.log);
    // this.messages.forEach((value, index) => {
    //   if (value.id.toString() === id) this.messages.splice(index, 1)
    // })
  }

}
