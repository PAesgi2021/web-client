import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../services/account/account.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  isWait: boolean;

  hide = true;
  eyeSlashed = "bi bi-eye-slash-fill";
  eye = "bi bi-eye-fill";
  isRegistered: boolean;

  constructor(
    public router: Router,
    public accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.isWait = false;
    this.isRegistered = false;
  }

  handleHide(): void {
    console.log(this.hide)
    this.hide = !this.hide;
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isWait = true;
    this.accountService.register({
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    }).subscribe(response => {
      if (response.status == 201) {
        this.isWait = false;
        this.isRegistered = true;
        setTimeout(() =>
          {
            this.router.navigate(['/login']);
          },
          880);
      }
    });
  }
}
