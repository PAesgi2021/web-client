import { Injectable } from '@angular/core';
import { User } from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: User;

  constructor() { }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
