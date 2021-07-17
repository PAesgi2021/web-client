import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AccountDTO} from "../dto/account.dto";
import {Account} from "../../models/account";
import {Token} from "../../models/token";
import {CookieService} from "ngx-cookie-service";
import {Cookie, ICookieProps} from "../../models/cookie";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _isAuthenticated: boolean;

  private API_URL: string = "http://localhost:3000/yt-account";
  private LOGIN_ROUTE: string = "/login";
  private IS_AUTHENTICATED_ROUTE = "/isAuthenticated"

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this._isAuthenticated = false;
  }

  login(dto: AccountDTO): Observable<HttpResponse<AccountDTO>> {
    return this.http.post<AccountDTO>(this.API_URL + this.LOGIN_ROUTE, dto, {
      observe: 'response',
      withCredentials: true
    });
  }

  register(dto: AccountDTO): Observable<HttpResponse<AccountDTO>> {
    return this.http.post<AccountDTO>(this.API_URL, dto, {observe: 'response'});
  }

  loadCookie(account: AccountDTO): boolean {
    const cookieValue: ICookieProps = {
      email: account.email,
      account_id: account.id,
      access_token: account.access_token
    };
    // Transform object to JSON then transform JSON to raw string
    const JSONcookie = JSON.stringify(cookieValue);
    this.cookieService.set('yourturncookie', JSONcookie.toString());

    // Reconstitute object from JSON formatted string
    const cookieObj: Cookie = JSON.parse(this.cookieService.get('yourturncookie'));

    //check if cookie is loaded
    if (cookieObj.access_token) {
      return true
    } else {
      return false;
    }
  }

  logout() {
    //TODO request api to revoke token
  }

  public get isAuthenticated(): Observable<boolean> {
    return this.http.post<HttpResponse<void>>(this.API_URL + this.IS_AUTHENTICATED_ROUTE, {
      observe: 'response',
      withCredentials: true
    }).pipe(switchMap((res) => {
      if (res.status == 201) {
        return of(true);
      } else {
        return of(false);
      }
    }));
  }

}
