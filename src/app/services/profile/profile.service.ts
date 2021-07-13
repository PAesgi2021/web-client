import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private API_URL: string = "http://localhost:3000/yt-profile"
  constructor(
    private http: HttpClient
  ) {

  }

}
