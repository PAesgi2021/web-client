import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account/account.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hide = true;
  isLogged: Observable<boolean>;

  constructor(
    public accountService: AccountService) {
    this.isLogged = this.accountService.isAuthenticated();
  }

  ngOnInit(): void {
  }

}
