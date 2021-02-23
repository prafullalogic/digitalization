import { Component, OnInit } from '@angular/core';


//third-party
import { SortEvent } from 'primeng/api/sortevent';
import 'xlsx';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-managecampaign',
  templateUrl: './managecampaign.component.html'
})

export class ManagecampaignComponent implements OnInit {

  //variable
  campaign: any[] = [];
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
    this.campaign = [
      { Campaign: "Camp 01", Budget: '20000000', Status: 'WIP', Account: "Dealer 1", ViewOnPlatform	: 'View on Platform', ChangeBudget : 'Change Budget', EditKeyWord : 'Edit Key Word' },
      
     
    ];
  }

  // openDealerSlider() {
  //   document.getElementById("mydealer").style.width = "1000px";
  // }

  // closeDealerSlider() {
  //   document.getElementById("mydealer").style.width = "0px";
  // }

  exportExcel() {
    this._commonService.exportExcel(this.campaign);
  }

  customSort(event: SortEvent) {
    this._commonService.customSort(event);
  }

  searchByBrand() {
  }

}
