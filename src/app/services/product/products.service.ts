import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  onProductChange = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve():Observable<any> | Promise<any> | any {
    this.getProducts()
  }

  getProducts(){
    this.httpClient.get('http://localhost:8084/product/get-all-product')
      .subscribe((products)=>{
        this.onProductChange.next(products);
        // console.log("products",products)
      })
  }
}
