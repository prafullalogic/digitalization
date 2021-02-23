
//angular
import { Component } from '@angular/core';

//service
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
})
export class HeaderComponent {

  //variable
  userName: string;

  constructor(private authService: AuthService) {
    this.userName = this.authService.loggedInData.userName;
  }

  logout() {
    this.authService.logout();
  }
}
