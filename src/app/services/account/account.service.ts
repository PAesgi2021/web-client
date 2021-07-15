import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AccountDTO} from "../dto/account.dto";
import {Account} from "../../models/account";

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
  }

  login(dto: AccountDTO): Observable<AccountDTO> {
    return this.http.post<AccountDTO>(this.API_URL + this.LOGIN_ROUTE, dto);
  }

  register(dto: AccountDTO): Observable<AccountDTO> {
    return this.http.post<AccountDTO>(this.API_URL, dto);
  }

  loadAccount(account: AccountDTO): boolean {
      this.currentAccount = new Account({...account})
      if (this.currentAccount.id) {
        this._isAuthenticated = true;
        return true;
      } else {
        return false;
      }
  }

  logout() {
    //TODO
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

}
