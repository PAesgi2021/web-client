import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AccountDTO} from "../dto/account.dto";
import {Account} from "../../models/account";
import {Token} from "../../models/token";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentAccount: Account;
  private _isAuthenticated: boolean;

  private API_URL: string = "http://localhost:3000/yt-account";
  private LOGIN_ROUTE: string = "/login";

  constructor(
    private http: HttpClient
  ) {
    this._isAuthenticated = false;
  }

  login(dto: AccountDTO): Observable<HttpResponse<Token>> {
    return this.http.post<Token>(this.API_URL + this.LOGIN_ROUTE, dto, {observe: 'response'});
  }

  register(dto: AccountDTO): Observable<HttpResponse<AccountDTO>> {
    return this.http.post<AccountDTO>(this.API_URL, dto, {observe: 'response'});
  }

  loadToken(account: Token): boolean {
    return true;

  }

  logout() {
    //TODO
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

}
