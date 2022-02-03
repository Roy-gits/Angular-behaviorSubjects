import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn : 'root',
})

export class DasgboardService {

  private subject = new Subject<any>();

  sendData(data){
    this.subject.next(data);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

}