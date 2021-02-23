import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewonplatform',
  templateUrl: './viewonplatform.component.html',
  styleUrls: ['./viewonplatform.component.css']
})
export class ViewonplatformComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  // }

  ngOnInit() {

  }

  displayModal: boolean;

    displayBasic: boolean;

    displayBasic2: boolean;

    displayMaximizable: boolean;

    displayPosition: boolean;

    position: string;

    showModalDialog() {
        this.displayModal = true;
    }

}
