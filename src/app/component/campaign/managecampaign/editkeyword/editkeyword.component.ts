import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editkeyword',
  templateUrl: './editkeyword.component.html',
  styleUrls: ['./editkeyword.component.css']
})
export class EditkeywordComponent implements OnInit {

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
