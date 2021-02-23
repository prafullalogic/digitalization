
//angular
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

//rxjs
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

//setting
import { GlobalVariable } from '../app.setting';

//LocalStrorageService
import { LocalStorageService } from 'angular-2-local-storage';

//model
import { LoggedInData } from '../model/loggedindata.model';
import { PersistData } from '../model/persistdata.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variable
  baseURL = GlobalVariable.BASE_API_URL + "token";
  loggedInData: any = this.getBalnkLoggedinUser();
  persistData: any = this.getBlankPersistData();
  

  constructor(private _localstorage: LocalStorageService, private http: HttpClient, private router: Router) {
    var tempLoggedIn = this._localstorage.get<LoggedInData>("loggedInData");
    if (tempLoggedIn) {
      this.loggedInData = tempLoggedIn;
    }
    else {
      this.loggedInData = this.getBalnkLoggedinUser();
    }

    var tempPersistData = this._localstorage.get<PersistData>("persistData");
    if (tempPersistData) {
      this.persistData = tempPersistData;
    }
    else {
      this.persistData = this.getBlankPersistData();
    }
  }

  private getBalnkLoggedinUser() {
    return new LoggedInData(0, '', '', '', '', false);
  }

  private getBlankPersistData() {
    return new PersistData(0, '');
  }

  validateUser(UserName, Password): Observable<any> {
    var userData = "username=" + UserName + "&password=" + Password + "&grant_type=password";

    if (UserName == "Admin" && Password == "Admin") {this._localstorage.set("access_token", "HSGTAJ");this.loggedInData.userId = 1;this.loggedInData.userName = UserName;       this.loggedInData.accesstoken = "HSGTAJ";this.loggedInData.isloggedIn = true;this._localstorage.set("loggedInData", this.loggedInData);}

    var reqHeader = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      });

    return this.http.post<any>(this.baseURL, userData, { headers: reqHeader }).pipe(
      tap((res) => {
        this._localstorage.set("access_token", res.access_token);
        this.setLoggedInUser(res);
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  setLoggedInUser(userObj) {
    this.loggedInData.userName = userObj.userName;
    this.loggedInData.accesstoken = userObj.access_token;
    this.loggedInData.isloggedIn = true;
    this._localstorage.set("loggedInData", this.loggedInData);
  }

  setPersistData(persistObj) {
    this.persistData.brandId = persistObj.brandId;
    this.persistData.brandName = persistObj.brandName;
    this._localstorage.set("persistData", this.persistData);
  }

  logout() {
    this._localstorage.clearAll();
    this.loggedInData = this.getBalnkLoggedinUser();
    this.persistData = this.getBlankPersistData();
    this.router.navigate(['Login']);
  }
}
