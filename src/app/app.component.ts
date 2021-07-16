import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yourturn';

  constructor(
    public router: Router
  ) {
  }
  ngOnInit() {
    this.router.navigate(['/login']);
  }

  elementHeight(tagName: string) {
    return document.getElementsByTagName(tagName)[0].clientHeight;
  }

  bodyHeight() {
    const heightHF = this.elementHeight("app-header") + this.elementHeight("app-footer")
    return window.innerHeight - heightHF;
  }
}
