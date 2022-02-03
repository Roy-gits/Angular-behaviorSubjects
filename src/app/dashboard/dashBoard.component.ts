import { Component, VERSION } from '@angular/core';
import { DasgboardService } from '../dashboard.Service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashBoard.component.html',
  styleUrls: [ './dashBoard.component.css' ]
})
export class DashBoardComponent  {
  title : string ;

  constructor(private dbService:DasgboardService){
  this.dbService.getData().subscribe( d => {
      if(d){
        this.title = d
      }
  })
  }
}