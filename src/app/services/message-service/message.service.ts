import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CreateMessageDto } from "../dto/create-message.dto";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { MessageDto } from "../dto/message.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import { PostDto } from "../dto/post.dto";
import { UpdateMessageDto } from "../dto/update-message.dto";


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private API_URL: string = "http://localhost:3000/yt-message";

  constructor(
    private http: HttpClient
  ) {
  }

  // -------------------------------------------------------------------------------------------------------------------

  createMessage(dto: CreateMessageDto): Observable<MessageDto> {
    return this.http.post<MessageDto>(this.API_URL, dto);
  }

  updateMessage(id: number, dto: UpdateMessageDto): Observable<MessageDto> {
    return this.http.patch<MessageDto>(`${this.API_URL}/${id}`, dto);
  }

}
