import { Component, VERSION } from '@angular/core';
import { DasgboardService } from './dashboard.Service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private dbService:DasgboardService){

  }

  sendData(data){
    this.dbService.sendData(data);
  }
  name = 'Angular ' + VERSION.major;
}
