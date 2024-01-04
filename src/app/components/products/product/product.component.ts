import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/product/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products : any =[];

  constructor(private productService: ProductsService,
              private router : Router){}

  ngOnInit(): void {
    this.productService.onProductChange.subscribe((products)=>{
      this.products=products;
      // console.log("product1",products)
    })
  }

  addEditProduct(product:any){
    // console.log("product",product);

    if (product != null){
      sessionStorage.setItem("productID",product.productId);
    }else {
      sessionStorage.removeItem("productID");
    }

    this.router.navigate(['/admin/product/add-edit'])
  }

  // getProduct(){
  //   this.productService.getProducts();
  // }

}
