import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changebudget',
  templateUrl: './changebudget.component.html',
  styleUrls: ['./changebudget.component.css']
})
export class ChangebudgetComponent implements OnInit {

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
