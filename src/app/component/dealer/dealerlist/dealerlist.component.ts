//angular
import { Component, OnInit } from '@angular/core';

//third-party
import { SortEvent } from 'primeng/api/sortevent';
import 'xlsx';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealerlist.component.html',
})
export class DealerListComponent implements OnInit {

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
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "mmy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "smy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "xmy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "zmy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "zmy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
      { code: "bmy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
    ];
  }

  openDealerSlider() {
    document.getElementById("mydealer").style.width = "1000px";
  }

  closeDealerSlider() {
    document.getElementById("mydealer").style.width = "0px";
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
