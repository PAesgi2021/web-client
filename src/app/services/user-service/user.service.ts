import {Injectable} from '@angular/core';

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

  constructor() {
  }

}
