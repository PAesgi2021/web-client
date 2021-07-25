import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfileDto} from "../dto/profile.dto";
import {CreateProfileDto} from "../dto/create-profile.dto";
import {UpdateProfileDto} from "../dto/update-profile.dto";
import {Router} from "@angular/router";
import {HttpService} from "../utils/http.service";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private API_URL: string = "http://localhost:3000/yt-profile";

  constructor(
    private router: Router,
    private http: HttpClient,
    private httpSerice: HttpService,
  ) {
  }

  // -------------------------------------------------------------------------------------------------------------------

  isSelected() {
    if (!this.httpSerice.getCookie().current_profile_id) {
      this.router.navigate(['/profile']).then(() => {
          window.location.reload();
        }
      )
    }
  }

  profileView() {
    this.router.navigate(['/profile']);
  }

  getAllProfile(): Observable<ProfileDto[]> {
    return this.http.get<ProfileDto[]>(this.API_URL, {responseType: 'json'});
  }

  getProfileById(id: number): Observable<ProfileDto> {
    return this.http.get<ProfileDto>(this.API_URL + '/' + this.httpSerice.getCookie().current_profile_id);
  }


  createProfile(dto: CreateProfileDto): Observable<ProfileDto> {
    return this.http.post<ProfileDto>(this.API_URL, dto);
  }

  updateProfile(id: number, dto: UpdateProfileDto): Observable<ProfileDto> {
    return this.http.patch<ProfileDto>(`${this.API_URL}/${id}`, dto)
  }

  deleteProfile(id: number): Observable<ProfileDto> {
    return this.http.delete<ProfileDto>(this.API_URL + '/' + id);
  }
}
