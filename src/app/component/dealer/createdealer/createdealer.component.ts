import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
@Component({
  selector: 'app-createdealer',
  templateUrl: './createdealer.component.html'
})
export class CreatedealerComponent implements OnInit {
  products: any[] = [];
  brandSearch: string;

  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
  }
  exportExcel() {
    this._commonService.exportExcel(this.products);
  }

  
  searchByBrand() {
  }

}
