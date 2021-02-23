
//angular
import { Component } from '@angular/core';

//component
import { SpinnerComponent } from './app.spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //varibale
  public spinnerComponent = SpinnerComponent;

  title = 'DealerDigitizationUI';
}
