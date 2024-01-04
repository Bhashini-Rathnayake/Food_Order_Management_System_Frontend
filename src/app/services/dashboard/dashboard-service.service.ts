import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  dashboardValues = new Subject();

  constructor(
    private httpClient: HttpClient) { }

  resolve(): Observable<any>| Promise<any> | any{
    // this.getValues()
    console.log("Works")
  }


  getValues(){
    this.httpClient.get(`http://localhost:8084/dashboard/get-all-value`)
      .subscribe((values) => {

        if (values){
          this.dashboardValues.next(values);
          // console.log("values",values)
        }

      })

  }

}
