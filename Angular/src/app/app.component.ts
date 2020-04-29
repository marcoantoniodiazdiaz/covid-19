import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid19Angular';

  showNav = false;

  constructor(private loginService: LoginService) {
    this.showNav = this.loginService.authenticate;
  }
}
