import { Component, OnInit } from '@angular/core';

//third-party
import { SortEvent } from 'primeng/api/sortevent';
import 'xlsx';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html'
})
export class ManageAccountComponent implements OnInit {

  //variable
  products: any[] = [];
  exportColumns: any[] = [];

  brandSearch: string;

  first: number = 0;
  rows: number = 10;

  selectedState: any = null;
  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];
  cities1: any[] = [];
  cities2: any[] = [];
  city1: any = null;
  city2: any = null;

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this.products = [
      { DealerName: "Dealer 01", ShortName: 'D2', CreatedOn: "16-02-21", AccountType	: 'DV360', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 02", ShortName: 'D3', CreatedOn: "16-02-21", AccountType	: 'Google ads', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 03", ShortName: 'D4', CreatedOn: "16-02-21", AccountType	: 'Adwords Express', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 04", ShortName: 'D5', CreatedOn: "16-02-21", AccountType	: 'Facebook', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 05", ShortName: 'D6', CreatedOn: "16-02-21", AccountType	: 'Google ads', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 01", ShortName: 'D2', CreatedOn: "16-02-21", AccountType	: 'DV360', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 02", ShortName: 'D3', CreatedOn: "16-02-21", AccountType	: 'Google ads', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 03", ShortName: 'D4', CreatedOn: "16-02-21", AccountType	: 'Adwords Express', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 04", ShortName: 'D5', CreatedOn: "16-02-21", AccountType	: 'Facebook', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 05", ShortName: 'D6', CreatedOn: "16-02-21", AccountType	: 'Google ads', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 01", ShortName: 'D2', CreatedOn: "16-02-21", AccountType	: 'DV360', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 02", ShortName: 'D3', CreatedOn: "16-02-21", AccountType	: 'Google ads', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 03", ShortName: 'D4', CreatedOn: "16-02-21", AccountType	: 'Adwords Express', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 04", ShortName: 'D5', CreatedOn: "16-02-21", AccountType	: 'Facebook', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
      { DealerName: "Dealer 05", ShortName: 'D6', CreatedOn: "16-02-21", AccountType	: 'Google ads', ActiveCampaign : '5', SpendTillDate : '2550000', Status: 'WIP', Action : '' },
     
    ];
  }

  // openDealerSlider() {
  //   document.getElementById("mydealer").style.width = "1000px";
  // }

  // closeDealerSlider() {
  //   document.getElementById("mydealer").style.width = "0px";
  // }

  exportExcel() {
    this._commonService.exportExcel(this.products);
  }

  customSort(event: SortEvent) {
    this._commonService.customSort(event);
  }

  searchByBrand() {
  }

}
