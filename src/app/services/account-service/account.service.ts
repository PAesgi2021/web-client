import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDto} from "../dto/account.dto";
import {CreateAccountDto} from "../dto/create-account.dto";
import {UpdateAccountDto} from "../dto/update-account.dto";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private API_URL: string = "http://localhost:3000/yt-account";

  constructor(
    private http: HttpClient
  ) {
  }

  // -------------------------------------------------------------------------------------------------------------------

  getAllAccount(): Observable<AccountDto[]> {
    return this.http.get<AccountDto[]>(this.API_URL, {responseType: 'json'});
  }

  createProfile(dto: CreateAccountDto): Observable<AccountDto> {
    return this.http.post<AccountDto>(this.API_URL, dto);
  }

  updateProfile(id: number, dto: UpdateAccountDto): Observable<AccountDto> {
    return this.http.patch<AccountDto>(`${this.API_URL}/${id}`, dto)
  }
}
