import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateChallengeDto} from "../dto/create-challenge.dto";
import {ChallengeDto} from "../dto/challenge.dto";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private API_URL: string = "http://localhost:3000/yt-challenge";

  constructor(
    private http: HttpClient
  ) {
  }

  // -------------------------------------------------------------------------------------------------------------------

  getAllChallenge(): Observable<ChallengeDto[]> {
    return this.http.get<ChallengeDto[]>(this.API_URL, {responseType: 'json'});
  }

  createChallenge(dto: CreateChallengeDto): Observable<ChallengeDto> {
    return this.http.post<ChallengeDto>(this.API_URL, dto);
  }

  deleteChallenge(id: string): Observable<ChallengeDto> {
    return this.http.delete<ChallengeDto>(this.API_URL + '/' + id);
  }

}
