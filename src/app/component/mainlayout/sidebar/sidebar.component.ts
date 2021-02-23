
//angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './Sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  //variable
  isActivePerformance: boolean = true;

  constructor(private _router: Router) { }

  ngOnInit() {
    // document.getElementById("mySidenav").style.width = "230px";
  }

  goToPerformance() {
    this._router.navigate(['/DealerDigitisation']);
  }

  goToManageDealer() {
    this._router.navigate(['/DealerDigitisation/DealerList']);
  }

  goToManageAdAccount() {
    this._router.navigate(['/DealerDigitisation/AdAccountList']);
  }
}
