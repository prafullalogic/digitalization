//angular
import { Component, OnInit } from '@angular/core';

//third-party
import { SortEvent } from 'primeng/api/sortevent';
import 'xlsx';

//service
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-dealer-list',
  templateUrl: './adaccountlist.component.html',
})
export class AdAccountListComponent implements OnInit {

  //variable
  products: any[] = [];
  exportColumns: any[] = [];

  brandSearch: string;

  first: number = 0;
  rows: number = 10;

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
      { code: "Amy Elsner", name: 'amyelsner.png', category: "Amy Elsner", quantity: 'amyelsner.png' },
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
