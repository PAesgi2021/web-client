import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfileDto} from "../dto/profile.dto";
import {CreateProfileDto} from "../dto/create-profile.dto";
import {UpdateProfileDto} from "../dto/update-profile.dto";



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private API_URL: string = "http://localhost:3000/yt-profile";

  constructor(
    private http: HttpClient
  ) {
  }

  // -------------------------------------------------------------------------------------------------------------------

  getAllProfile(): Observable<ProfileDto[]> {
    return this.http.get<ProfileDto[]>(this.API_URL, {responseType: 'json'});
  }

  createProfile(dto: CreateProfileDto): Observable<ProfileDto> {
    return this.http.post<ProfileDto>(this.API_URL, dto);
  }

  updateProfile(id: number, dto: UpdateProfileDto): Observable<ProfileDto> {
    return this.http.patch<ProfileDto>(`${this.API_URL}/${id}`, dto)
  }

}
