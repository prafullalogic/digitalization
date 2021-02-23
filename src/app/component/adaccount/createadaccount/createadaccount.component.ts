import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createadaccount',
  templateUrl: './createadaccount.component.html'
})
export class CreateadaccountComponent implements OnInit {
  items: Array<any> = [{ name: 'L1', id: 1 }, { name: 'L2', id: 2 }, { name: 'L3', id: 3 }, { name: 'L4', id: 4 }]

  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: any) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
    // your code goes here after droping files or any
  }

  onDragOver(evt) {
    console.log(evt);

    evt.preventDefault();
    evt.stopPropagation();
  }

  onDragLeave(evt) {
    console.log(evt);

    evt.preventDefault();
    evt.stopPropagation();
  }

  upload(event) {
    console.log(event)
  }


}
