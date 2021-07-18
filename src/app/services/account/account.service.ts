import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AccountDTO} from "../dto/account.dto";
import {CookieService} from "ngx-cookie-service";
import {Cookie, ICookieProps} from "../../models/cookie";
import {catchError, switchMap} from "rxjs/operators";
import {FileUtils} from "../../utils/file-utils";
import {Router} from "@angular/router";
import {HttpService} from "../utils/http.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private API_URL: string = "http://127.0.0.1:3000/yt-account";
  private LOGIN_ROUTE: string = "/login";
  private IS_AUTHENTICATED_ROUTE = "/isAuthenticated"

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private httpService: HttpService
  ) {
  }

  login(dto: AccountDTO): Observable<HttpResponse<AccountDTO>> {
    return this.http.post<AccountDTO>(this.API_URL + this.LOGIN_ROUTE, dto, {
      observe: 'response',
      withCredentials: true
    }).pipe(
      catchError(async (error) => FileUtils.handleErrorObservable(error))
    );
  }

  register(dto: AccountDTO): Observable<HttpResponse<AccountDTO>> {
    return this.http.post<AccountDTO>(this.API_URL, dto, {observe: 'response'});
  }

  async loadCookie(account: AccountDTO): Promise<boolean> {
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
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    if (this.httpService.getCookie() == null) {
      return of(false);
    }
    return this.http.post<HttpStatusCode>(this.API_URL + this.IS_AUTHENTICATED_ROUTE, {
      observe: 'response',
    }, {headers: this.httpService.getHeadersForRequest()}).pipe(
      catchError(async (error) => FileUtils.handleErrorObservable(error))
    ).pipe(switchMap((res) => {
      if (res == 202) {
        return of(true);
      } else if (res.status == 401) {
        return of(false);
      } else {
        return of(false);
      }
    }));
  }

}
