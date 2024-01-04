import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomersService implements Resolve<any>{

  onCustomerChange = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve():Observable<any>| Promise<any> |any{
    this.getCustomers();
  }

  getCustomers(){
    this.httpClient.get('http://localhost:8084/customer/get-all-customer')
      .subscribe((customers)=>{
        this.onCustomerChange.next(customers);
        // console.log("customers",customers)
      })
  }
}
