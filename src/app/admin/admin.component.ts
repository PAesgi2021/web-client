import { Component, OnInit } from '@angular/core';
import {AccountService} from "../services/account/account.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public accountService: AccountService,
  ) {
    this.accountService.checkAuthentication();
  }

  ngOnInit(): void {
  }

}
