
//angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

//third-party
import { MessageService } from 'primeng/api';

//service
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  //variable
  userName: string;
  passWord: string;

  constructor(private _authService: AuthService, private _messageService: MessageService, private _router: Router) { }

  ngOnInit() {
    if (this._authService.loggedInData.isloggedIn == true) {
      this._router.navigate(['/DealerDigitisation']);
    }
  }

  validateUser() {
    this._authService.validateUser(this.userName, this.passWord).subscribe(success => {
      this._router.navigate(['/DealerDigitisation']);
    },
    (error) => {
      this._messageService.add({ severity: 'error', summary: 'Error Message', detail: "Username or Password is incorrect." });
      });
  }
}
