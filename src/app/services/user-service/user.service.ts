import { Injectable } from '@angular/core';
import { Profile } from "../../models/profile";

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
