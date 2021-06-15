import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  eyeSlashed = "bi bi-eye-slash-fill";
  eye = "bi bi-eye-fill";

  constructor() { }

  ngOnInit(): void {
  }

  handleHide(): void {
    console.log(this.hide)
    this.hide = !this.hide;
  }
}
