import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpHeaders} from "@angular/common/http";
import {Cookie} from "../../models/cookie";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public cookieService: CookieService
  ) { }

  getHeadersForRequest() : HttpHeaders {
    if (!this.cookieService.get('yourturncookie')) {
      return null;
    }
    const auth_token = (JSON.parse(this.cookieService.get('yourturncookie')) as Cookie).access_token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return headers;
  }

  getCookie(): Cookie | null {
    if (this.cookieService.check('yourturncookie')) {
      return JSON.parse(this.cookieService.get('yourturncookie')) as Cookie
    }
    return null;
  }

  setCookie(newCookie: Cookie) {
    // Transform object to JSON then transform JSON to raw string
    const JSONcookie = JSON.stringify(newCookie);
    this.cookieService.set('yourturncookie', JSONcookie.toString());
  }
}
