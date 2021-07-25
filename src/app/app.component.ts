import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "./services/account/account.service";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yourturn';
  showHeader = true;

  constructor(
    public router: Router,
    public accountService: AccountService,
    private cookieService: CookieService
  ) {
  }

  ngOnInit() {
  }

  elementHeight(tagName: string) {
    return document.getElementsByTagName(tagName)[0].clientHeight;
  }

  bodyHeight() {
    const heightHF = this.elementHeight("app-header") + this.elementHeight("app-footer")
    return window.innerHeight - heightHF;
  }

  modifyHeader(location) { // This method is called many times
    this.showHeader = !(location.url === '/login' || location.url === '/register');
  }
}
