import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateMessageDto} from "../dto/create-message.dto";
import {Observable} from "rxjs";
import {MessageDto} from "../dto/message.dto";
import {UpdateMessageDto} from "../dto/update-message.dto";


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

  getAllMessage(): Observable<MessageDto[]> {
    return this.http.get<MessageDto[]>(this.API_URL, {responseType: 'json'});
  }

  createMessage(dto: CreateMessageDto): Observable<MessageDto> {
    return this.http.post<MessageDto>(this.API_URL, dto);
  }

  updateMessage(id: number, dto: UpdateMessageDto): Observable<MessageDto> {
    return this.http.patch<MessageDto>(`${this.API_URL}/${id}`, dto);
  }

  deleteMessage(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
