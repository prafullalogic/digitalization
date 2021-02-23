import { Component, OnInit } from '@angular/core';
//third-party
import { SortEvent } from 'primeng/api/sortevent';
import 'xlsx';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-managedealer',
  templateUrl: './managedealer.component.html',
})
export class ManagedealerComponent implements OnInit {
  //variable
  products: any[] = [];
  brandSearch: string;


  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
    this.products = [
      { DealerName: "Dealer 01", Department: "East Zone", ShortName: 'D2', CreatedOn: "16-02-21", Location: "Mumbai",LPlink	: 'www.xyz.com', Adwords : 'Yes',  Status: 'Active', Action : '' },
      
     
    ];
  }

  exportExcel() {
    this._commonService.exportExcel(this.products);
  }

  customSort(event: SortEvent) {
    this._commonService.customSort(event);
  }
  searchByBrand() {
  }
}
