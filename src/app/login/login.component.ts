import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../services/account/account.service";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isWait: boolean;
  hide: boolean;

  constructor(
    public accountService: AccountService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.isWait = false;
    this.hide = true;

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  getErrorMessage() {
    if (this.loginForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    if (this.loginForm.invalid) {
      console.log(this.getErrorMessage());
      return;
    }
    this.isWait = true;
    this.accountService.login({
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }).subscribe(account => {
      if (this.accountService.loadAccount(account)) {
        this.isWait = false;
        setTimeout(() =>
          {
            this.router.navigate(['/social-feed']);
          },
          880);
      }
    });

  }
}
