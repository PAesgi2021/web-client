import { Injectable } from '@angular/core';
import { User } from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {
    email: "email",
    password: "password",
    firstname: "password",
    lastname: "password"
  }

  constructor() { }

}
